import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {ProfileScreenStyle} from './styles';
import CustomText from '../../../../components/CustomText';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../../configs/color';
import TextBoxImage from '../../../../components/TextBoxImage';
import {FullButtonComponent} from '../../../../components/customview';
import Toast from 'react-native-simple-toast';
import imageSrc from '../../../../assets/Image/ic_avtarr.png';
import {GoogleSignin} from '@react-native-community/google-signin';

function ProfileScreen({navigation}) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function onAuthStateChanged(userInfo) {
    if (userInfo) {
      setUser(userInfo._user);
    }
  }

  const signOut = async () => {
    const isGoogleSignedIn = await GoogleSignin.isSignedIn();

    try {
      if (isGoogleSignedIn) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      }
      auth()
        .signOut()
        .then(() => {
          Toast.show('Successfully Logged out', Toast.LONG);
          navigation.navigate('LoginPage');
          setUser({});
        });
    } catch (error) {
      console.error(error);
      Toast.show(
        'An error occured. Please check network and try again',
        Toast.LONG,
      );
    }
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <StatusBar backgroundColor={colors.FONT_COLOR} />

      <View style={ProfileScreenStyle.container}>
        <View style={ProfileScreenStyle.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <Image
              source={require('../../../../assets/Image/ic_left_arrow.png')}
              resizeMode="contain"
              style={{
                width: wp('4.5%'),
                height: hp('5%'),
                marginLeft: wp('5%'),
              }}
            />
          </TouchableOpacity>
          <View style={ProfileScreenStyle.headerInnerWrapper}>
            <CustomText style={ProfileScreenStyle.headerText}>
              Profile
            </CustomText>
          </View>
        </View>

        <ScrollView style={{flex: 1, flexDirection: 'column'}}>
          {/* Start Content View */}
          <View style={{flex: 1, flexDirection: 'column'}}>
            {/* Profle pic Section */}
            <View style={ProfileScreenStyle.contentView}>
              <View style={ProfileScreenStyle.contentViewInnerWrapper}>
                <View style={ProfileScreenStyle.contentViewInnerWrapper1}>
                  <Image
                    source={user.photoURL ? {uri: user.photoURL} : imageSrc}
                    resizeMode="cover"
                    resizeMethod="scale"
                    style={ProfileScreenStyle.imageStyle}
                  />

                  <View style={ProfileScreenStyle.contentViewInnerWrapper2}>
                    <TouchableOpacity
                      style={{justifyContent: 'center', alignSelf: 'center'}}
                      onPress={() =>
                        navigation.navigate('UpldateProfileScreen')
                      }>
                      <Image
                        source={require('../../../../assets/Image/ic_edit.png')}
                        resizeMode="contain"
                        style={ProfileScreenStyle.editProfileImageStyle}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            {/* Fields View */}
            <View
              style={{flexDirection: 'column', flex: 1, marginTop: hp('2%')}}>
              <View style={{flexDirection: 'row', marginRight: hp('4%')}}>
                <TextBoxImage
                  rightInput={wp('3%')}
                  inputFontSize={hp('1.9%')}
                  levelfontSize={hp('1.9%')}
                  fontFamily="NunitoSans-Regular"
                  leftMar={wp('5%')}
                  type={1}
                  width={wp('8%')}
                  height={hp('8%')}
                  name="Name"
                  placename={user.displayName || 'Username'}
                  path={require('../../..//../assets/Image/ic_name.png')}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: hp('1.5%'),
                  marginRight: wp('4%'),
                }}>
                <TextBoxImage
                  rightInput={wp('3%')}
                  inputFontSize={hp('1.9%')}
                  levelfontSize={hp('1.9%')}
                  fontFamily="NunitoSans-Regular"
                  leftMar={wp('5%')}
                  type={1}
                  width={wp('8%')}
                  height={hp('8%')}
                  name="Phone"
                  placename={user.phoneNumber || 'Phone Number'}
                  path={require('../../..//../assets/Image/ic_phone.png')}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: hp('1.5%'),
                  marginRight: wp('4%'),
                }}>
                <TextBoxImage
                  rightInput={wp('3%')}
                  inputFontSize={hp('1.9%')}
                  levelfontSize={hp('1.9%')}
                  fontFamily="NunitoSans-Regular"
                  leftMar={wp('5%')}
                  type={1}
                  width={wp('8%')}
                  height={hp('8%')}
                  name="Email"
                  placename={user.email || 'Email'}
                  path={require('../../..//../assets/Image/ic_email.png')}
                />
              </View>
              <View style={{flexDirection: 'row', marginRight: wp('4%')}}>
                <TextBoxImage
                  rightInput={wp('3%')}
                  inputFontSize={hp('1.9%')}
                  levelfontSize={hp('1.9%')}
                  fontFamily="NunitoSans-Regular"
                  leftMar={wp('5%')}
                  type={1}
                  width={wp('8%')}
                  height={hp('8%')}
                  name="Dob"
                  placename={'Date of Birth'}
                  path={require('../../..//../assets/Image/ic_calendar.png')}
                />
              </View>

              {/* Save Adddress */}
              <View style={{flexDirection: 'row', marginTop: wp('5%')}}>
                <CustomText style={ProfileScreenStyle.addressHeader}>
                  Saved Addresses
                </CustomText>
              </View>

              <View
                style={{
                  marginLeft: wp('10%'),
                  flexDirection: 'row',
                  marginTop: wp('5%'),
                }}>
                <Image
                  source={require('../../../../assets/Image/ic_homee.png')}
                  resizeMode="contain"
                  style={{width: wp('8%'), height: hp('8%')}}
                />
                <View style={{flexDirection: 'column', marginTop: wp('3%')}}>
                  <CustomText style={ProfileScreenStyle.customText}>
                    HOME
                  </CustomText>
                  <CustomText style={ProfileScreenStyle.customText1}>
                    Pune, Maharashtra, India
                  </CustomText>
                </View>
              </View>

              <View
                style={{
                  marginLeft: wp('10%'),
                  flexDirection: 'row',
                  marginTop: wp('5%'),
                }}>
                <Image
                  source={require('../../../../assets/Image/ic_direction.png')}
                  resizeMode="contain"
                  style={{width: wp('8%'), height: hp('8%')}}
                />
                <View style={{flexDirection: 'column', marginTop: wp('3%')}}>
                  <CustomText style={ProfileScreenStyle.customText}>
                    OTHER
                  </CustomText>
                  <CustomText style={ProfileScreenStyle.customText1}>
                    Pune, Maharashtra, India
                  </CustomText>
                </View>
              </View>

              <View
                style={{
                  marginLeft: wp('10%'),
                  flexDirection: 'row',
                  marginTop: wp('5%'),
                  marginBottom: 100,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SaveLocationScreen')}>
                  <Image
                    source={require('../../../../assets/Image/ic_map.png')}
                    resizeMode="contain"
                    style={{width: wp('8%'), height: hp('8%')}}
                  />
                </TouchableOpacity>

                <View style={{flexDirection: 'column', marginTop: wp('3%')}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SaveLocationScreen')}>
                    <CustomText style={ProfileScreenStyle.customText2}>
                      Select location via map
                    </CustomText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View>
            <FullButtonComponent
              type={'fill'}
              text={'Logout'}
              textStyle={ProfileScreenStyle.signout}
              onPress={signOut}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

export default ProfileScreen;
