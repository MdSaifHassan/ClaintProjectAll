import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

import colors from '../../../../configs/color';
import CustomText from '../../../../components/CustomText';
import {GenericStyles} from '../../otp/GenericStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SenderInformation from './SenderInformation';
import ReceiverInfomation from './ReceiverInfomation';
import ParcelrInformation from './ParcelrInformation';
import PickupTime from './PickupTime';
import {FullButtonComponent} from '../../../../components/customview';
import {PolicyScreenStyle} from './styles';
import {CheckBox} from 'react-native-elements';

export function PolicyScreen({navigation}) {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <StatusBar backgroundColor={colors.FONT_COLOR} />
      <View style={PolicyScreenStyle.container}>
        <View style={PolicyScreenStyle.headerView}>
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
          <View style={PolicyScreenStyle.headerInnerWrapper}>
            <CustomText style={PolicyScreenStyle.headerText}>
              Privacy & Policy
            </CustomText>
          </View>
        </View>
        <ScrollView style={{flex: 1, flexDirection: 'column'}}>
          {/* Start Content View */}
          <View style={{flex: 1, flexDirection: 'column'}}>
            <CustomText style={{margin: wp('8%'), textAlign: 'center'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </CustomText>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
