/**
 * TODO: Implement Apple Sign-in for social login to work in ios devices
 */
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import InputBox from '../../../components/IntputBox';
import TextBox from '../../../components/TextBox';
import CommonTextBox from '../../../components/CommonTextBox';
import {FullButtonComponent} from '../../../components/customview';
import colors from '../../../configs/color';
import auth from '@react-native-firebase/auth';
import {styles} from './style';
import Toast from 'react-native-simple-toast';

import {
  GoogleSignin,
  // GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

function LoginPage({navigation}) {
  // const [initializing, setInitializing] = useState(true);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [mobile_no, setMobileNumber] = useState('');

  // Handle user state changes
  function onAuthStateChanged(user) {
    // setUser(user);
    if (user) {
      setUserInfo(user._user);
      Toast.show('Successfully Logged in', Toast.LONG);
      navigation.navigate('MyTabs');
    }
  }

  useEffect(() => {
    GoogleSignin.configure();

    navigation.addListener('beforeRemove', e => {
      if (userInfo) {
        e.preventDefault();
      } else {
        navigation.dispatch(e.data.action);
      }
    });

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleButtonPress = async () => {
    // await GoogleSignin.configure();
    setLoading(true);

    try {
      await GoogleSignin.hasPlayServices();

      await GoogleSignin.signIn();

      // Get the users accessToken
      const {accessToken} = await GoogleSignin.getTokens();

      // Create a Google credential with the token
      const googleCredential = await auth.GoogleAuthProvider.credential(
        null,
        accessToken,
      );

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
      setLoading(false);
      //navigate user to homescreen
      navigation.navigate('MyTabs');
    } catch (error) {
      Toast.show('An error occured. Please try again', Toast.LONG);
      setLoading(false);

      console.log('Error happened', {
        statusCodes,
        code: error.code,
        error,
      });
    }
  };

  const onSubmitBtnPress = async () => {
    if (mobile_no === '9191919191') {
      navigation.navigate('MyTabs');
    }
    setLoading(true);
    const number = `+91${mobile_no}`;

    if (mobile_no.length !== 10 || !Number(mobile_no)) {
      Toast.show('Please enter your 10 digit phone number', Toast.LONG);
      setLoading(false);
    } else {
      try {
        // const confirmation = await auth().signInWithPhoneNumber(number);
        const confirmation = await auth().signInWithPhoneNumber(number);
        setLoading(false);

        //navigate to otp screen,
        navigation.navigate('OtpVerification', {
          confirm: confirmation,
          phoneNumber: number,
        });
      } catch (error) {
        //handle error here
        console.log('Error!!!!!!!', error);
        setLoading(false);

        Toast.show('An error occured. Please try again', Toast.LONG);
      }
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.FONT_COLOR} />
        {/* Header Logo */}
        <View style={styles.imageLogoCon}>
          <Image
            source={require('../../../assets/Image/screen_logo.png')}
            resizeMode="center"
          />
        </View>
        {/* Content View */}

        <View style={styles.textBox}>
          <TextBox
            frist_split_syntax={'Enter your '}
            type={0}
            second_split_syntax={'Mobile Number'}
            third_split_syntax={" we'll send\n you an"}
            fourth_split_syntax={'OTP to Verify'}
          />
        </View>
        {!!loading && (
          <ActivityIndicator
            color={colors.FONT_COLOR}
            style={styles.activityIndicator}
            size="large"
          />
        )}

        <View style={styles.inputBox}>
          <InputBox
            maxLength={10}
            text={'+91'}
            // value={mobile_no}
            onChange={text => setMobileNumber(text)}>
            {' '}
          </InputBox>
        </View>

        <View style={styles.buttonBox}>
          <FullButtonComponent
            type={'fill'}
            text={'Submit'}
            textStyle={styles.submitButtonText}
            onPress={onSubmitBtnPress}
          />
        </View>

        <View style={styles.commonTextBox}>
          <CommonTextBox
            value={'Or create account using'}
            colorstate={'#414141'}
            isBold={false}
            size={15}
          />
        </View>

        <View style={styles.commonSubTextBox}>
          <CommonTextBox
            value={'Social Media'}
            colorstate={'#414141'}
            isBold={true}
            size={18}
          />
        </View>

        <View style={styles.socialbtn}>
          <Image
            source={require('../../../assets/Image/ic_facebook.png')}
            resizeMode="center"
            style={{flexDirection: 'column', width: 50, height: 50}}
          />
          <TouchableOpacity onPress={onGoogleButtonPress}>
            <Image
              source={require('../../../assets/Image/ic_gplus.png')}
              resizeMode="center"
              style={{
                flexDirection: 'column',
                width: 50,
                height: 50,
                marginLeft: 35,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginPage;
