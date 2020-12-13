import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
  useWindowDimensions,
} from 'react-native';
import CustomText from '../../../../components/CustomText';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../../configs/color';
import InputBoxImage from '../../../../components/inputBoxImage';
import {FullButtonComponent} from '../../../../components/customview';
import {GenericStyles} from '../../otp/GenericStyles';
import {ContactusScreenStyle} from './styles';

function ContactUsScreen() {
  const [bottomMargin, setMargin] = useState(wp('10%'));
  const [name, setName] = useState('Enter Name');
  const [email, setEmail] = useState('Enter Email');
  const [description, setDescription] = useState('Enter Description');
  const {height} = useWindowDimensions();
  console.log('HEIGHT', height);
  useEffect(() => {
    console.log(bottomMargin);
    Keyboard.addListener('keyboardDidShow', () => {
      console.log(bottomMargin);
      setMargin('50%');
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setMargin(wp('10%'));
    });

    return () => {
      Keyboard.removeListener('keyboardDidShow', () => {}),
        Keyboard.removeListener('keyboardDidHide', () => {});
    };
  }, []);

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View>
        <StatusBar backgroundColor={colors.FONT_COLOR} />
        <View style={ContactusScreenStyle.container}>
          <View style={ContactusScreenStyle.headerView}>
            <CustomText style={ContactusScreenStyle.headerText}>
              Contact Us
            </CustomText>
          </View>

          {/* <View style={{flexDirection: 'row', justifyContent: 'center'}}> */}
          <View style={{alignSelf: 'center'}}>
            <Image
              source={require('../../../../assets/Image/screen_logo.png')}
              resizeMode="contain"
              style={{
                width: wp('80%'),
                height: hp('35%'),
                padding: 0,
                //backgroundColor: 'red',
              }}
            />
          </View>
          <KeyboardAvoidingView
            // behavior={'padding'}
            //keyboardVerticalOffset={200}
            enabled
            // style={{flex: 1}}
          >
            <View>
              <View style={{flexDirection: 'row', marginRight: wp('4%')}}>
                <InputBoxImage
                  levelfontSize={hp('1.9%')}
                  inputFontSize={hp('1.9%')}
                  keyboardType={'default'}
                  returnKeyType={'next'}
                  leftMar={wp('4%')}
                  type={0}
                  width={wp('8%')}
                  height={wp('8%')}
                  name="Name"
                  // placename={name}
                  placenholder="Enter Name"
                  onChangeText={text => setName(text)}
                  path={require('../../..//../assets/Image/ic_name.png')}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: wp('5%'),
                  marginRight: wp('4%'),
                }}>
                <InputBoxImage
                  levelfontSize={hp('1.9%')}
                  inputFontSize={hp('1.9%')}
                  keyboardType={'email-address'}
                  returnKeyType={'next'}
                  leftMar={wp('4%')}
                  type={0}
                  width={wp('8%')}
                  height={wp('8%')}
                  name="Email"
                  // placename={email}
                  placenholder="Enter Email"
                  onChangeText={text => setEmail(text)}
                  path={require('../../..//../assets/Image/ic_email.png')}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: wp('5%'),
                  marginRight: wp('4%'),
                }}>
                <InputBoxImage
                  levelfontSize={hp('1.9%')}
                  inputFontSize={hp('1.9%')}
                  keyboardType={'default'}
                  returnKeyType={'next'}
                  leftMar={wp('4%')}
                  type={0}
                  width={wp('8%')}
                  height={wp('8%')}
                  name="Description"
                  // placename={description}
                  placenholder="Enter description"
                  onChangeText={text => setDescription(text)}
                  path={require('../../..//../assets/Image/ic_des.png')}
                  // onFocus={() => {
                  //   console.log(bottomMargin, 'focus');
                  //   setMargin('50%');
                  // }}
                  // onBlur={() => setMargin('10%')}
                />
              </View>

              <View style={ContactusScreenStyle.buttonDivStyle}>
                <FullButtonComponent
                  type={'fill'}
                  text={'Submit'}
                  textStyle={ContactusScreenStyle.submitButtonText}
                  buttonStyle={GenericStyles.mt24}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </ScrollView>
  );
}

export default ContactUsScreen;
