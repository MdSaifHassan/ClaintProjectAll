import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import InputBox from '../../../components/IntputBox';
import ButtonBox from '../../../components/ButtonBox';
import TextBox from '../../../components/TextBox';
import CommonTextBox from '../../../components/CommonTextBox';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CustomButton,
  FullButtonComponent,
} from '../../../components/customview';
import {GenericStyles} from '../otp/GenericStyles';
import colors from '../../../configs/color';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {commonService} from '../../../services/commonService';
import {setPrefMobileNumber} from '../../../local/pref';
import {UpdataNumberScreenStyle} from './styles';
// GoogleSignin.configure({
//   scopes: ["email", "https://www.googleapis.com/auth/plus.me", "profile", "https://www.googleapis.com/auth/gmail.readonly"],
//    // what API you want to access on behalf of the user, default is email and profile
//   webClientId: '723612058994-isp3b62gkutu7iuc3t604uemdic1bf0d.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   // specifies a hosted domain restriction
// // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//  // [Android] related to `serverAuthCode`, read the docs link below *.
// // [Android] specifies an account name on the device that should be used
//   iosClientId: '723612058994-c9ldn744patvsprga350519hgv6ndol6.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
// });

if (Platform.OS === 'android') {
  GoogleSignin.configure({
    scopes: [
      'email',
      'https://www.googleapis.com/auth/plus.me',
      'profile',
      'https://www.googleapis.com/auth/gmail.readonly',
    ],
    forceCodeForRefreshToken: true,
    offlineAccess: true,
    offlineAccess: true,
    androidClientId:
      '723612058994-isp3b62gkutu7iuc3t604uemdic1bf0d.apps.googleusercontent.com',
    webClientId:
      '723612058994-isp3b62gkutu7iuc3t604uemdic1bf0d.apps.googleusercontent.com',
  });
} else {
  GoogleSignin.configure({
    scopes: [
      'email',
      'https://www.googleapis.com/auth/plus.me',
      'profile',
      'https://www.googleapis.com/auth/gmail.readonly',
    ],
    webClientId:
      '723612058994-isp3b62gkutu7iuc3t604uemdic1bf0d.apps.googleusercontent.com',
    forceCodeForRefreshToken: true,
    iosClientId:
      '723612058994-4p9kt5i907dt0cij7p9gjdauc3uk9fma.apps.googleusercontent.com',
  });
}

function UpdateNumberPage({navigation}) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const [mobile_no, setMobileNumber] = useState(0);
  const [isToast, setToastVisible] = useState(false);

  function onAuthStateChanged(user) {
    setUser(user);
    console.log('google signin==>', user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function _signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }
  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  async function signOut() {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => alert('Your are signed out!'));
      setloggedIn(false);
      // setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  }
  function doUpdateNumber() {
    if (mobile_no == '') {
      Toast.show('Please enter your number', Toast.LONG);
    } else if (mobile_no.length < 10) {
      Toast.show('Please put 10 digit mobile number', Toast.LONG);
    } else if (mobile_no.length > 11) {
      Toast.show('Please put 10 digit mobile number', Toast.LONG);
    } else {
      setToastVisible(true);
      setTimeout(function () {
        commonService
          .updateContact(mobile_no)
          .then((res) => {
            if (res.data.info.status == 200) {
              console.log('LoginRespons' + res.data);
              Toast.show(res.data.info.message, Toast.LONG);
              setToastVisible(false);
              setPrefMobileNumber(mobile_no);
              navigation.navigate('OtpVerification', {data: '1'});
            } else if (res.data.info.status == 201) {
              Toast.show(res.data.info.message, Toast.LONG);
            } else if (res.data.info.status == 202) {
              Toast.show(res.data.info.message, Toast.LONG);
            } else if (res.data.info.status == 203) {
              Toast.show('some time try again !', Toast.LONG);
            }
          })
          .catch((errr) => {
            Toast.show(errr, Toast.LONG);
            setToastVisible(false);
          });
      }, 800);
    }
  }

  return (
    <ScrollView>
      <View style={UpdataNumberScreenStyle.container}>
        <StatusBar backgroundColor={colors.FONT_COLOR} />
        {/* Header Logo */}
        <View style={UpdataNumberScreenStyle.imageLogoCon}>
          <Image
            source={require('../../../assets/Image/screen_logo.png')}
            resizeMode="center"></Image>
        </View>
        {/* Content View */}

        <View style={UpdataNumberScreenStyle.textBox}>
          <TextBox
            frist_split_syntax={'Enter your'}
            type={0}
            second_split_syntax={'Mobile Number'}
            third_split_syntax={" we'll send\n you an"}
            fourth_split_syntax={'OTP to Verify'}></TextBox>
        </View>
        <ActivityIndicator
          color={colors.FONT_COLOR}
          animating={isToast}
          style={{justifyContent: 'center', alignSelf: 'center'}}
          size="large"
        />

        <View style={UpdataNumberScreenStyle.inputBox}>
          <InputBox text={'+91'} onChange={(text) => setMobileNumber(text)}>
            {' '}
          </InputBox>
        </View>

        <View style={UpdataNumberScreenStyle.buttonBox}>
          <FullButtonComponent
            type={'fill'}
            text={'Submit'}
            textStyle={UpdataNumberScreenStyle.submitButtonText}
            onPress={() => doUpdateNumber()}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default UpdateNumberPage;
// LoginPage.propTypes = {
//   errorMessage: PropTypes.string.isRequired,
//   loggingIn: PropTypes.bool.isRequired,
//   login: PropTypes.func.isRequired,
// };

// function mapStateToProps() {
//   return {
//     loggingIn: state.auth.loggingIn,
//     errorMessage: state.auth.errorMessage,
//   };
// }

// export default connect(mapStateToProps, {
//   login,
//   clearLoginErrorMessage,
// })(LoginPage);
