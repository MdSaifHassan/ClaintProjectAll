import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import colors from '../../../../configs/color';
import CustomText from '../../../../components/CustomText';
// import {GenericStyles} from '../../otp/GenericStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SenderInformation from './SenderInformation';
import ReceiverInfomation from './ReceiverInfomation';
import ParcelrInformation from './ParcelrInformation';
import PickupTime from './PickupTime';
import {FullButtonComponent} from '../../../../components/customview';
import Toast from 'react-native-simple-toast';
import {CheckBox} from 'react-native-elements';
import {AddOrderScreensStyle} from './styles';
import downIcon from '../../../../assets/Image/ic_downn.png';
import upIcon from '../../../../assets/Image/ic_up.png';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

class AddOrderScreens extends Component {
  // const [isSelected, setSelection] = useState(false);

  state = {
    value: '',
    loading: false,
    isSelected: false,
    orderDetails: {},
  };
  onChangeValueHandler(val) {
    // alert('Alert with one button');
  }

  gotoPrivacyScreen() {
    if (this.state.isSelected) {
      this.setState({isSelected: false});
    } else {
      this.setState({isSelected: true});
      this.props.navigation.navigate('PolicyScreen');
    }
  }
  updateOrder = (obj, type) => {
    const orderDetails = {
      ...this.state.orderDetails,
      [type]: obj,
    };
    this.setState({orderDetails});
  };
  handleSubmit = () => {
    const {isSelected, orderDetails} = this.state;
    const orderInfo = Object.keys(orderDetails);

    if (!isSelected) {
      Toast.show(
        'Please accept terms and conditions before submitting',
        Toast.LONG,
      );
      return;
    }
    if (orderInfo.length < 3) {
      Toast.show(
        'Please fill in the order details before submitting',
        Toast.LONG,
      );
      return;
    }
    if (!orderInfo.includes('receiverInfo')) {
      Toast.show(
        "Please fill in the receiver's information before submitting",
        Toast.LONG,
      );
      return;
    }
    if (!orderInfo.includes('senderInfo')) {
      Toast.show(
        "Please fill in the sender's Information before submitting",
        Toast.LONG,
      );
      return;
    }
    if (!orderInfo.includes('parcelInfo')) {
      Toast.show(
        'Please fill in the parcel Information before submitting',
        Toast.LONG,
      );
      return;
    }
    if (!orderInfo.includes('pickupTime')) {
      Toast.show('Please select pickup time before submitting', Toast.LONG);
      return;
    }
    this.createOrder();
  };

  createOrder = async () => {
    const currentUser = auth().currentUser;
    const {uid} = currentUser._user;
    this.setState({loading: true});
    const {orderDetails} = this.state;

    try {
      await firestore()
        .collection('orders')
        .add({
          details: orderDetails,
          userID: uid,
          createdAt: firestore.FieldValue.serverTimestamp(),
          status: 'booked',
        });

      Toast.show(
        'Order has been created. You will be contacted shortly',
        Toast.LONG,
      );
      this.setState({loading: false});
      this.props.navigation.goBack();
    } catch (error) {
      Toast.show('An error occured while creating your order', Toast.LONG);
      this.setState({loading: false});
      console.log('error occures', error);
    }
  };

  render() {
    return (
      <View style={AddOrderScreensStyle.container}>
        <StatusBar backgroundColor={colors.FONT_COLOR} />
        <ScrollView>
          <View style={AddOrderScreensStyle.headerView}>
            <CustomText style={AddOrderScreensStyle.headerText}>
              Add Order
            </CustomText>
          </View>

          <View style={{marginBottom: hp('20%')}}>
            <SenderInformation updateOrder={this.updateOrder} />
            <ReceiverInfomation updateOrder={this.updateOrder} />
            <TouchableOpacity
              onPress={this.changeLayout}
              style={AddOrderScreensStyle.secondContainer}>
              <Image
                source={require('../../../../assets/Image/ic_deliver.png')}
                resizeMode="contain"
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,
                  width: 40,
                  height: 30,
                  alignSelf: 'center',
                }}
              />
              <Text style={AddOrderScreensStyle.thirdWrapperText}>
                Delivery Service
              </Text>
              <Image
                source={downIcon}
                resizeMode="contain"
                style={{
                  flexDirection: 'row',
                  width: 40,
                  height: 40,
                  right: 10,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.changeLayout}
              style={AddOrderScreensStyle.secondContainer}>
              <Image
                source={require('../../../../assets/Image/ic_price.png')}
                resizeMode="contain"
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,
                  width: 40,
                  height: 30,
                  alignSelf: 'center',
                }}
              />
              <Text style={AddOrderScreensStyle.thirdWrapperText}>
                Approximate Price
              </Text>

              <Image
                source={downIcon}
                resizeMode="contain"
                style={{
                  flexDirection: 'row',
                  width: 40,
                  height: 40,
                  right: 10,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
            <ParcelrInformation updateOrder={this.updateOrder} />
            <PickupTime updateOrder={this.updateOrder} />
            <View
              style={{
                flexDirection: 'row',
                marginLeft: wp('3.5%'),
                marginTop: hp('1%'),
              }}>
              <CheckBox
                containerStyle={{
                  right: wp('5%'),
                  marginTop: hp('3%'),
                  backgroundColor: 'transparent',
                }}
                size={30}
                textStyle={{
                  color: colors.FONT_COLOR,
                  fontSize: hp('1.7%'),
                  fontFamily: 'NunitoSans-Regular',
                  left: wp('2%'),
                }}
                title="Terms and Conditions"
                checkedColor={colors.FONT_COLOR}
                checked={this.state.isSelected}
                onPress={() => this.gotoPrivacyScreen()}
              />
            </View>
            {!!this.state.loading && (
              <ActivityIndicator
                color={colors.FONT_COLOR}
                style={AddOrderScreensStyle.activityIndicator}
                size="large"
              />
            )}
            <View style={{marginRight: 40, marginLeft: 20}}>
              <FullButtonComponent
                // disabled={this.state.isSelected ? false : true}
                onPress={this.handleSubmit}
                type={'fill'}
                text={'Submit'}
                textStyle={AddOrderScreensStyle.submitButtonText}
                buttonStyle={AddOrderScreensStyle.mt24}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AddOrderScreens;
