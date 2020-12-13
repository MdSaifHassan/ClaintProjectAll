import React from 'react';
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
  TouchableOpacity,
} from 'react-native';
import {Icon, Avatar, Card} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import CustomText from '../../../components/CustomText';
import colors from '../../../configs/color';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import CustomTextInput from '../../../components/CustomTextInput';
import FullButtonComponent from '../../../components/FullButtonComponent';
import {GenericStyles} from '../otp/GenericStyles';
import {SavelLocationScreenStyles} from './styles';

function SaveLocationScreen({navigation}) {
  function getInitialState() {
    return {
      coordinate: {
        latitude: 22.7196,
        longitude: 75.8577,
      },
    };
  }

  function onRegionChange(region) {
    this.state.region.setValue(region);
  }
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <StatusBar backgroundColor={colors.FONT_COLOR} />
      <View style={SavelLocationScreenStyles.container}>
        <View style={SavelLocationScreenStyles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <Image
              source={require('../../../assets/Image/ic_left_arrow.png')}
              resizeMode="contain"
              style={{
                width: wp('4.5%'),
                height: hp('5%'),
                marginLeft: wp('5%'),
              }}
            />
          </TouchableOpacity>
          <View style={SavelLocationScreenStyles.profileStyle}>
            <CustomText style={SavelLocationScreenStyles.headerText}>
              Profile
            </CustomText>
          </View>
        </View>
        <ScrollView style={{flex: 1, flexDirection: 'column'}}>
          {/* Start Content View */}
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', position: 'relative'}}>
              <MapView
                style={{
                  width: wp('100%'),
                  height: hp('50%'),
                  marginTop: wp('10%'),
                }}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  latitude: 22.7196,
                  longitude: 75.8577,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <Marker.Animated coordinate={getInitialState().coordinate} />
              </MapView>
            </View>

            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                marginTop: wp('2%'),
              }}>
              <View style={SavelLocationScreenStyles.mainCustomDivStyle}>
                <Image
                  source={require('../../../assets/Image/ic_search.png')}
                  resizeMode="contain"
                  style={SavelLocationScreenStyles.customImageStyle}
                />
                <CustomTextInput
                  placeholder="Location search"
                  style={SavelLocationScreenStyles.customTextInputStyle}
                />
              </View>
            </View>

            {/* Save Adddress */}
            <View style={{flexDirection: 'row', marginTop: wp('13%')}}>
              <CustomText style={SavelLocationScreenStyles.addressHeader}>
                FLAT, FLOOR, BUILDING NAME
              </CustomText>
            </View>
            <View
              style={{
                marginLeft: wp('10%'),
                flexDirection: 'row',
                marginTop: wp('5%'),
              }}>
              <Image
                source={require('../../../assets/Image/ic_homee.png')}
                resizeMode="contain"
                style={{width: wp('8%'), height: hp('8%')}}
              />
              <CustomTextInput
                style={SavelLocationScreenStyles.secondTextInputStyle}
              />
            </View>
            <View style={{flexDirection: 'row', marginTop: wp('5%')}}>
              <CustomText style={SavelLocationScreenStyles.addressHeader}>
                HOW TO REACH (OPTIONAL)
              </CustomText>
            </View>

            <View
              style={{
                marginLeft: wp('10%'),
                flexDirection: 'row',
                marginTop: wp('5%'),
              }}>
              <Image
                source={require('../../../assets/Image/ic_direction.png')}
                resizeMode="contain"
                style={{width: wp('8%'), height: hp('8%')}}
              />
              <CustomTextInput
                style={SavelLocationScreenStyles.thirdTextInputStyle}
              />
            </View>

            <View style={{flexDirection: 'row', marginTop: wp('5%')}}>
              <CustomText style={SavelLocationScreenStyles.addressHeader}>
                SAVE AS
              </CustomText>
            </View>

            <View
              style={{
                marginLeft: wp('10%'),
                flexDirection: 'row',
                marginTop: wp('5%'),
              }}>
              <Image
                source={require('../../../assets/Image/ic_abouts.png')}
                resizeMode="contain"
                style={SavelLocationScreenStyles.customImageStyle4}
              />
              <CustomText style={SavelLocationScreenStyles.homeCustomTextStyle}>
                HOME
              </CustomText>
              <CustomText
                style={SavelLocationScreenStyles.officeCustomTextStyle}>
                OFFICE
              </CustomText>
              <CustomText
                style={SavelLocationScreenStyles.otherCustomTextStyle}>
                OTHER
              </CustomText>
            </View>

            <View style={SavelLocationScreenStyles.buttonDivStyle}>
              <FullButtonComponent
                type={'fill'}
                text={'Submit'}
                textStyle={SavelLocationScreenStyles.submitButtonText}
                buttonStyle={GenericStyles.mt24}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
export default SaveLocationScreen;
