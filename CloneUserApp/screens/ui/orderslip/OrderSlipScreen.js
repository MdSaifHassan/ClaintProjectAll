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
import colors from '../../../configs/color';
import CustomText from '../../../components/CustomText';
import CustomTextInput from '../../../components/CustomTextInput';
import SenderOrderSilp from './SenderOrderSilp';
import ReceiverOrderSilp from './ReceiverOrderSilp';
import ParcelOrderSilp from './ParcelOrderSilp';
import PickTimeOrderSlip from './PickTimeOrderSlip';
import {OrderSlipScreenStyles} from './styles';

function OrderSlipScreen({navigation}) {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <StatusBar backgroundColor={colors.FONT_COLOR} />

      <View style={OrderSlipScreenStyles.container}>
        <View style={OrderSlipScreenStyles.headerView}>
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
          <CustomText style={OrderSlipScreenStyles.OrderDetails}>
            <CustomText style={OrderSlipScreenStyles.headerText}>
              Order Details
            </CustomText>
          </CustomText>
        </View>

        <ScrollView>
          <View
            style={{flex: 1, flexDirection: 'column', marginBottom: hp('15%')}}>
            <SenderOrderSilp />
            <ReceiverOrderSilp />
            <ParcelOrderSilp />
            <PickTimeOrderSlip />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

export default OrderSlipScreen;
