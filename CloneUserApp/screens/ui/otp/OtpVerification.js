import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  Image,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  CustomText,
  CustomTextInput,
  CustomButton,
  FullButtonComponent,
} from '../../../components/customview';
import TimerText from './TimerTask';
import {GenericStyles} from './GenericStyles';

import TextBox from '../../../components/TextBox';
import RNOtpVerify from 'react-native-otp-verify';
import ErrorBoundary from '../../../components/ErrorBoundary';
import colors from '../../../configs/color';
import {isAndroid, logErrorWithMessage} from '../../../configs/helperFunctions';
import CustomTextInputOtp from '../../../components/CustomTextInputOtp';
import {
  getPrefMobileNumber,
  setPrefUserData,
  getfPrefUserData,
} from '../../../local/pref';
import {commonService} from '../../../services/commonService';
import Toast from 'react-native-simple-toast';
import {styles} from './styles';
import auth from '@react-native-firebase/auth';

const RESEND_OTP_TIME_LIMIT = 30; // 30 secs
const AUTO_SUBMIT_OTP_TIME_LIMIT = 4; // 4 secs

let resendOtpTimerInterval;
let autoSubmitOtpTimerInterval;

function OtpVerification({navigation, route}, props) {
  const {otpRequestData, attempts} = props;
  const [user, setUser] = useState();

  const {phoneNumber, confirm} = route.params;
  // const {confirm} = route?.params?.confirm || '';

  const [attemptsRemaining, setAttemptsRemaining] = useState(attempts);
  const [otpArray, setOtpArray] = useState(['', '', '', '', '', '']);
  const [submittingOtp, setSubmittingOtp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // in secs, if value is greater than 0 then button will be disabled
  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT,
  );

  // 0 < autoSubmitOtpTime < 4 to show auto submitting OTP text
  const [autoSubmitOtpTime, setAutoSubmitOtpTime] = useState(
    AUTO_SUBMIT_OTP_TIME_LIMIT,
  );

  // TextInput refs to focus programmatically while entering OTP
  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const fifthTextInputRef = useRef(null);
  const sixTextInputRef = useRef(null);

  // a reference to autoSubmitOtpTimerIntervalCallback to always get updated value of autoSubmitOtpTime
  const autoSubmitOtpTimerIntervalCallbackReference = useRef();

  useEffect(() => {
    if (Platform === 'android') {
    }
    // autoSubmitOtpTime value will be set after otp is detected,
    // in that case we have to start auto submit timer
    autoSubmitOtpTimerIntervalCallbackReference.current = autoSubmitOtpTimerIntervalCallback;
  });

  useEffect(() => {
    if (Platform === 'android') {
    }
    startResendOtpTimer();

    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  useEffect(() => {
    // docs: https://github.com/faizalshap/react-native-otp-verify

    if (Platform.OS === 'android') {
      RNOtpVerify.getOtp()
        .then(p =>
          RNOtpVerify.addListener(message => {
            try {
              if (message) {
                const messageArray = message.split('\n');
                if (messageArray[2]) {
                  const otp = messageArray[2].split(' ')[0];
                  if (otp.length === 4) {
                    setOtpArray(otp.split(''));

                    // to auto submit otp in 4 secs
                    setAutoSubmitOtpTime(AUTO_SUBMIT_OTP_TIME_LIMIT);
                    startAutoSubmitOtpTimer();
                  }
                }
              }
            } catch (error) {
              logErrorWithMessage(
                error.message,
                'RNOtpVerify.getOtp - read message, OtpVerification',
              );
            }
          }),
        )
        .catch(error => {
          logErrorWithMessage(
            error.message,
            'RNOtpVerify.getOtp, OtpVerification',
          );
        });

      // remove listener on unmount
      return () => {
        RNOtpVerify.removeListener();
      };
    }
  }, []);

  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  };

  // this callback is being invoked from startAutoSubmitOtpTimer which itself is being invoked from useEffect
  // since useEffect use closure to cache variables data, we will not be able to get updated autoSubmitOtpTime value
  // as a solution we are using useRef by keeping its value always updated inside useEffect(componentDidUpdate)
  const autoSubmitOtpTimerIntervalCallback = () => {
    if (autoSubmitOtpTime <= 0) {
      clearInterval(autoSubmitOtpTimerInterval);

      // submit OTP
      onSubmitButtonPress();
    }
    setAutoSubmitOtpTime(autoSubmitOtpTime - 1);
  };

  const startAutoSubmitOtpTimer = () => {
    if (autoSubmitOtpTimerInterval) {
      clearInterval(autoSubmitOtpTimerInterval);
    }
    autoSubmitOtpTimerInterval = setInterval(() => {
      autoSubmitOtpTimerIntervalCallbackReference.current();
    }, 1000);
  };

  const refCallback = textInputRef => node => {
    textInputRef.current = node;
  };

  const onResendOtpButtonPress = async () => {
    // clear last OTP
    if (firstTextInputRef) {
      setOtpArray(['', '', '', '', '', '']);
      const resend = auth().signInWithPhoneNumber(phoneNumber);
      // firstTextInputRef.current.focus();
    }

    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer();

    // resend OTP Api call
    // Use auth().signInWithPhoneNumber(phoneNumber) to resend otp
    // todo
    console.log('todo: Resend OTP');
  };

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (user) {
      Toast.show('Successfully Logged in', Toast.LONG);
      navigation.navigate('MyTabs');
      //Add user to reducer
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onSubmitButtonPress = async () => {
    setSubmittingOtp(true);
    // API call

    const code =
      otpArray[0] +
      '' +
      otpArray[1] +
      '' +
      otpArray[2] +
      '' +
      otpArray[3] +
      '' +
      otpArray[4] +
      '' +
      otpArray[5];

    console.log('+++++++++++++++++++', {code, confirm});
    if (code.length === 6) {
      try {
        /**
         * TODO: find a better way to pass the .confirm function to this screen
         */
        const confirmCode = await confirm.confirm(code);
        setSubmittingOtp(false);
        navigation.navigate('MyTabs');
      } catch (error) {
        setSubmittingOtp(false);
        Toast.show(
          'Ivalid OTP was entered. Please enter correct OTP code',
          Toast.LONG,
        );
        console.log('OTP Error:', error);
      }
    } else {
      setSubmittingOtp(false);
      Toast.show('Please enter correct OTP code', Toast.LONG);
    }
  };

  // this event won't be fired when text changes from '' to '' i.e. backspace is pressed
  // using onOtpKeyPress for this purpose
  const onOtpChange = index => {
    return value => {
      if (isNaN(Number(value))) {
        // do nothing when a non digit is pressed
        return;
      }
      const otpArrayCopy = otpArray.concat();
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);

      // auto focus to next InputText if value is not blank
      if (value !== '') {
        if (index === 0) {
          secondTextInputRef.current.focus();
        } else if (index === 1) {
          thirdTextInputRef.current.focus();
        } else if (index === 2) {
          fourthTextInputRef.current.focus();
        } else if (index === 3) {
          fifthTextInputRef.current.focus();
        } else if (index === 4) {
          sixTextInputRef.current.focus();
        }
      }
    };
  };

  // only backspace key press event is fired on Android
  // to have consistency, using this event just to detect backspace key press and
  // onOtpChange for other digits press
  const onOtpKeyPress = index => {
    return ({nativeEvent: {key: value}}) => {
      // auto focus to previous InputText if value is blank and existing value is also blank
      if (value === 'Backspace' && otpArray[index] === '') {
        if (index === 1) {
          firstTextInputRef.current.focus();
        } else if (index === 2) {
          secondTextInputRef.current.focus();
        } else if (index === 3) {
          thirdTextInputRef.current.focus();
        } else if (index === 4) {
          fourthTextInputRef.current.focus();
        } else if (index === 5) {
          fifthTextInputRef.current.focus();
        }

        /**
         * clear the focused text box as well only on Android because on mweb onOtpChange will be also called
         * doing this thing for us
         * todo check this behaviour on ios
         */
        if (isAndroid && index > 0) {
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index - 1] = ''; // clear the previous box which will be in focus
          setOtpArray(otpArrayCopy);
        }
      }
    };
  };

  return (
    <KeyboardAvoidingView behavior={'padding'} enabled style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.FONT_COLOR} />
        {/* Header Logo */}
        <View style={styles.imageLogoCon}>
          <Image
            source={require('../../../assets/Image/screen_logo.png')}
            resizeMode="center"
          />
        </View>
        {/* Otp View */}
        <ErrorBoundary screenName={'OtpVerification'}>
          <View style={styles.container}>
            <View style={styles.textBox}>
              <TextBox
                frist_split_syntax={'Enter the 6 digit OTP that was sent'}
                type={1}
                second_split_syntax={' Mobile Number'}
                third_split_syntax={'\nto '}
                fourth_split_syntax={phoneNumber}
              />
            </View>
          </View>

          <View style={[GenericStyles.row, GenericStyles.mt12]}>
            {[
              firstTextInputRef,
              secondTextInputRef,
              thirdTextInputRef,
              fourthTextInputRef,
              fifthTextInputRef,
              sixTextInputRef,
            ].map((textInputRef, index) => (
              <CustomTextInputOtp
                containerStyle={[GenericStyles.fill, GenericStyles.mr12]}
                value={otpArray[index]}
                onKeyPress={onOtpKeyPress(index)}
                onChangeText={onOtpChange(index)}
                keyboardType={'numeric'}
                maxLength={1}
                style={[styles.props, GenericStyles.centerAlignedText]}
                autoFocus={index === 0 ? true : undefined}
                refCallback={refCallback(textInputRef)}
                key={index}
              />
            ))}
          </View>
          {!!submittingOtp && (
            <ActivityIndicator
              color={colors.FONT_COLOR}
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 20,
              }}
              size="large"
            />
          )}
          {errorMessage ? (
            <CustomText
              style={[GenericStyles.negativeText, GenericStyles.mt12]}>
              {errorMessage}
            </CustomText>
          ) : null}
          {resendButtonDisabledTime > 0 ? (
            <TimerText text={'Resend OTP in'} time={resendButtonDisabledTime} />
          ) : (
            <CustomButton
              type={'link'}
              text={'Resend OTP'}
              buttonStyle={styles.otpResendButton}
              textStyle={styles.otpResendButtonText}
              onPress={onResendOtpButtonPress}
            />
          )}
          <View style={GenericStyles.fill} />
          {/* {submittingOtp && <ActivityIndicator />} */}
          {autoSubmitOtpTime > 0 &&
          autoSubmitOtpTime < AUTO_SUBMIT_OTP_TIME_LIMIT ? (
            <TimerText text={'Submitting OTP in'} time={autoSubmitOtpTime} />
          ) : null}
          {/* Footer */}
          <CustomText
            style={[GenericStyles.centerAlignedText, GenericStyles.mt12]}>
            {attemptsRemaining || 0} Attempts remaining
          </CustomText>

          <FullButtonComponent
            type={'fill'}
            text={'Submit'}
            textStyle={styles.submitButtonText}
            buttonStyle={GenericStyles.mt24}
            onPress={() => onSubmitButtonPress()}
            // disabled={submittingOtp}
          />
        </ErrorBoundary>
      </View>
    </KeyboardAvoidingView>
  );
}

OtpVerification.defaultProps = {
  attempts: 5,
  otpRequestData: {
    username: 'varunon9',
    email_id: false,
    phone_no: true,
  },
};

OtpVerification.propTypes = {
  otpRequestData: PropTypes.object.isRequired,
  attempts: PropTypes.number.isRequired,
};

export default OtpVerification;

/**
 * if (code.length === 0) {
      Toast.show('Please enter otp', Toast.LONG);
    } else if (code.length < 4) {
      Toast.show('Please enter valid otp', Toast.LONG);
    } else {
      setLoadingVisible(true);
      getPrefMobileNumber().then(data => {
        // console.log('todo: Submit OT====>'+data.mobile_no);
        commonService
          .otpVerify(data.mobile_no, code)
          .then(res => {
            // console.log('response===>data'+JSON.stringify(JSON.parse(res).info))
            setTimeout(function() {
              setLoadingVisible(false);

              let status = JSON.stringify(JSON.parse(res).info.status);
              let msg = JSON.stringify(JSON.parse(res).info.message);

              if (status == 200) {
                let user_profile = JSON.parse(res).user_profile;
                setPrefUserData(user_profile);
                getfPrefUserData().then(data => {
                  console.log('response===>data' + data);
                  navigation.navigate('MyTabs');
                });
              } else if (status == 201) {
                Toast.show(msg, Toast.LONG);
                setLoadingVisible(false);
              } else if (status == 202) {
                Toast.show(msg, Toast.LONG);
                setLoadingVisible(false);
              } else if (status == 203) {
                Toast.show(msg, Toast.LONG);
                setLoadingVisible(false);
              }
            }, 800);
          })
          .catch(err => {
            console.log('Otp Error====>' + err);
            setLoadingVisible(false);
          });
      });
    }
 */
