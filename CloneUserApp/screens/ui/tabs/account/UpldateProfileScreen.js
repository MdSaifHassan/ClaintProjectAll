import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import {UpdateProfileScreenStyle} from './styles';
import CustomText from '../../../../components/CustomText';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../../configs/color';
import InputBoxImage from '../../../../components/inputBoxImage';
import {FullButtonComponent} from '../../../../components/customview';
import {getfPrefUserData, setPrefUserData} from '../../../../local/pref';
import Toast from 'react-native-simple-toast';
import {useFocusEffect} from '@react-navigation/core';
import {commonService} from '../../../../services/commonService';
import auth from '@react-native-firebase/auth';

import imageSrc from '../../../../assets/Image/ic_avtarr.png';
import DateTimePicker from '@react-native-community/datetimepicker';
import firestore from '@react-native-firebase/firestore';

function UpldateProfileScreen({navigation}) {
  const [username, setUserName] = useState('');
  const [fullName, setFullName] = useState('');

  const [mobileno, setMobileNo] = useState();
  const [email, setEmail] = useState();
  const [dob, setDob] = useState('');
  const [userpic, setUserPic] = useState();
  const [gender, setGender] = useState();
  const [sessionid, setSessionId] = useState();
  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

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

  function checkImageURL(url) {
    fetch(url).then(res => {
      if (res.status == 404) {
        console.log(res.status);
        setUserPic('');
      } else {
        setUserPic(url);
      }
    });
  }

  const updateProfile = async () => {
    if (!user.displayName && !fullName) {
      Toast.show('Please enter your full Name', Toast.LONG);
      return;
    }
    if ((!mobileno || mobileno.length !== 10) && !user.phoneNumber) {
      Toast.show('Please enter your 10 digit phone number', Toast.LONG);
      return;
    }
    if (!email && !user.email) {
      Toast.show('Please enter your email', Toast.LONG);
      return;
    }

    // const currentUser = auth().currentUser;
    const {uid} = user;

    const phoneNumber = `+91${mobileno}`;

    const userDetails = {
      name: fullName || user.displayName,
      phoneNumber: phoneNumber || user.phoneNumber,
      email: email || user.email,
      dateOfBirth: dob,
    };
    try {
      await firestore()
        .collection('users')
        .doc(uid)
        .set(userDetails, {merge: true});
      Toast.show('Your profile has been updated', Toast.LONG);
      navigation.goBack();
    } catch (error) {
      console.log('error occures', error);
    }

    // currentUser.updateProfile({
    //   displayName: fullName || user.displayName,
    //   phoneNumber: phoneNumber || user.phoneNumber,
    //   email: email || user.email,
    // });
  };

  return (
    <KeyboardAvoidingView
      behavior={'height'}
      keyboardVerticalOffset={200}
      enabled
      style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
      <StatusBar backgroundColor={colors.FONT_COLOR} />

      {/* <View style={{flex: 1}}> */}

      <ScrollView>
        <View style={UpdateProfileScreenStyle.container}>
          <View style={UpdateProfileScreenStyle.headerView}>
            <TouchableOpacity onPress={() => navigation.goBack(null)}>
              <Image
                source={require('../../../../assets/Image/ic_left_arrow.png')}
                resizeMode="contain"
                style={UpdateProfileScreenStyle.backArrow}
              />
            </TouchableOpacity>
            <View style={UpdateProfileScreenStyle.screenHeader}>
              <CustomText style={UpdateProfileScreenStyle.headerText}>
                Update Profile
              </CustomText>
            </View>
          </View>

          {/* Start Content View */}
          <View style={{flex: 1, flexDirection: 'column'}}>
            {/* Profle pic Section */}
            <View style={UpdateProfileScreenStyle.contentView}>
              <View style={UpdateProfileScreenStyle.contentViewInner}>
                <View style={UpdateProfileScreenStyle.contentViewInner1}>
                  <Image
                    source={user.photoURL ? {uri: user.photoURL} : imageSrc}
                    resizeMode="contain"
                    style={UpdateProfileScreenStyle.userImage}
                  />
                  <TouchableOpacity
                    style={UpdateProfileScreenStyle.contentViewInnerImageBox}>
                    <Image
                      source={require('../../../../assets/Image/ic_edit.png')}
                      resizeMode="contain"
                      style={UpdateProfileScreenStyle.editIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <ActivityIndicator
              color={colors.FONT_COLOR}
              animating={isLoading}
              style={{justifyContent: 'center', alignSelf: 'center'}}
              size="large"
            />

            {/* Fields View */}

            <View style={UpdateProfileScreenStyle.profileDetails}>
              {/** TODO find out why they need a username */}
              {/* <View style={{flexDirection: 'row', marginRight: hp('4%')}}>
                <InputBoxImage
                  placenholder="Enter username"
                  onChangeText={text => setUserName(text)}
                  keyboardType="default"
                  returnKeyType="next"
                  rightInput={wp('3%')}
                  inputFontSize={hp('1.9%')}
                  levelfontSize={hp('1.9%')}
                  fontFamily="NunitoSans-Regular"
                  leftMar={wp('5%')}
                  type={1}
                  width={wp('8%')}
                  height={hp('8%')}
                  name="First Name"
                  placename={username}
                  path={require('../../..//../assets/Image/ic_name.png')}
                />
              </View> */}
              <View style={{flexDirection: 'row', marginRight: hp('4%')}}>
                <InputBoxImage
                  placenholder={'Enter full name'}
                  onChangeText={text => setFullName(text)}
                  keyboardType="default"
                  returnKeyType="next"
                  rightInput={wp('3%')}
                  inputFontSize={hp('1.9%')}
                  levelfontSize={hp('1.9%')}
                  fontFamily="NunitoSans-Regular"
                  leftMar={wp('5%')}
                  type={1}
                  width={wp('8%')}
                  height={hp('8%')}
                  name="Last Name"
                  placename={fullName}
                  textTransform="capitalize"
                  path={require('../../..//../assets/Image/ic_name.png')}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: hp('1.5%'),
                  marginRight: wp('4%'),
                }}>
                <InputBoxImage
                  placenholder="Enter mobile no."
                  onChangeText={text => setMobileNo(text)}
                  keyboardType="phone-pad"
                  returnKeyType="next"
                  rightInput={wp('3%')}
                  inputFontSize={hp('1.9%')}
                  levelfontSize={hp('1.9%')}
                  fontFamily="NunitoSans-Regular"
                  leftMar={wp('5%')}
                  type={1}
                  width={wp('8%')}
                  height={hp('8%')}
                  name="Phone"
                  placename={mobileno}
                  path={require('../../..//../assets/Image/ic_phone.png')}
                  maxLength={10}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: hp('1.5%'),
                  marginRight: wp('4%'),
                }}>
                <InputBoxImage
                  placenholder="Enter an email "
                  onChangeText={text => setEmail(text)}
                  keyboardType="email-address"
                  returnKeyType="next"
                  rightInput={wp('3%')}
                  inputFontSize={hp('1.9%')}
                  levelfontSize={hp('1.9%')}
                  fontFamily="NunitoSans-Regular"
                  leftMar={wp('5%')}
                  type={1}
                  width={wp('8%')}
                  height={hp('8%')}
                  name="Email"
                  placename={email}
                  textTransform="lowercase"
                  path={require('../../..//../assets/Image/ic_email.png')}
                />
              </View>
              {/* datetime picker needs a work around */}
              {/* <View
                style={{
                  flexDirection: 'row',
                  marginRight: wp('4%'),
                  alignContent: 'center',
                }}>
                <Image
                  source={require('../../..//../assets/Image/ic_calendar.png')}
                  style={{
                    width: wp('8%'),
                    height: hp('8%'),
                    marginLeft: wp('10%'),
                  }}
                  resizeMode="contain"
                />
                <DateTimePicker
                  style={{
                    alignContent: 'center',
                    color: colors.FONT_COLOR,
                    marginTop: 10,
                  }}
                  value={dob || new Date()}
                  mode="date"
                  placeholder="Date of birth"
                  format="YYYY-MM-DD"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      display: 'none',
                    },
                    dateInput: {
                      borderColor: 'transparent',
                      textAlign: 'left',
                      color: colors.FONT_COLOR,
                    },
                    placeholderText: {
                      // marginLeft: 10,
                    },
                  }}
                  onDateChange={date => setDob(date)}
                />
              </View> */}
              {/* Save Adddress */}
              <View
                style={{
                  marginRight: 20,
                  marginLeft: 20,
                  marginBottom: 40,
                  marginTop: 15,
                }}>
                <FullButtonComponent
                  type={'fill'}
                  text={'Update'}
                  textStyle={UpdateProfileScreenStyle.submitButtonText}
                  buttonStyle={UpdateProfileScreenStyle.mt24}
                  onPress={() => updateProfile()}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default UpldateProfileScreen;
