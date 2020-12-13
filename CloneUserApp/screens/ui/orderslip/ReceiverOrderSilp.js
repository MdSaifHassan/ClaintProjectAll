import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ListItem, Card, Overlay} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import colors from '../../../configs/color';
import {CustomTextInputInfo, CustomText} from '../../../components/customview';
import {ReceiverOrderSlipStyle} from './styles';
export default class ReceiverOrderSilp extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
      isDropDown: false,
      isCity: false,
      isState: false,
      isCountry: false,
      isPinCode: false,
      cityname: 'Add City',
      statname: 'Add State',
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  getListViewItem = item => {
    this.setState({isCity: false});
    this.setState({cityname: item.key});
  };

  getListViewItemState = item => {
    this.setState({isState: false});
    this.setState({statname: item.key});
  };

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };

  changeLayoutDropisCity = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    // this.setState({ isDropDown: !this.state.isDropDown });
    this.setState({isCity: !this.state.isCity});
  };

  changeLayoutDropisState = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({isState: !this.state.isState});
  };

  changeLayoutDropisCountry = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({isCountry: !this.state.isCountry});
  };

  changeLayoutDropisPinCode = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({isPinCode: !this.state.isPinCode});
  };

  render() {
    const options = [
      {
        label: 'News',
      },
      {
        label: 'Design',
      },
      {
        label: 'Sales',
      },
      {
        label: 'Marketing',
      },
      {
        label: 'Customer Success',
      },
    ];
    const {value, onChangeValue} = this.props;

    return (
      <View style={ReceiverOrderSlipStyle.container}>
        <View style={ReceiverOrderSlipStyle.secondContainer}>
          <TouchableOpacity
            onPress={this.changeLayout}
            style={ReceiverOrderSlipStyle.thirdWrapper}>
            <Image
              source={require('../../../assets/Image/ic_reciver_info.png')}
              resizeMode="contain"
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                width: 40,
                height: 30,
                alignSelf: 'center',
              }}
            />
            <Text style={ReceiverOrderSlipStyle.thirdWrapperText}>
              Receiver Information
            </Text>
            {this.state.expanded == false ? (
              <Image
                source={require('../../../assets/Image/ic_downn.png')}
                resizeMode="contain"
                style={{
                  flexDirection: 'row',
                  width: 40,
                  height: 40,
                  right: 10,
                  alignSelf: 'center',
                }}
              />
            ) : (
              <Image
                source={require('../../../assets/Image/ic_up.png')}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  right: 10,
                  alignSelf: 'center',
                }}
              />
            )}
          </TouchableOpacity>

          <View
            style={{
              height: this.state.expanded ? null : 0,
              overflow: 'hidden',
            }}>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                marginTop: hp('3%'),
              }}>
              <View style={{flexDirection: 'row'}}>
                {/* Name fields */}
                <CustomText style={ReceiverOrderSlipStyle.customText1}>
                  Name
                </CustomText>
                <CustomText style={ReceiverOrderSlipStyle.customText2}>
                  : Lorem Ipsum
                </CustomText>
              </View>

              {/* Address fields */}
              <View style={{flexDirection: 'row'}}>
                <CustomText style={ReceiverOrderSlipStyle.customText3}>
                  Address
                </CustomText>
                <CustomText style={ReceiverOrderSlipStyle.customText3}>
                  : Lorem Ipsum
                </CustomText>
              </View>

              {/* City fields */}
              <View style={{flexDirection: 'row'}}>
                <CustomText style={ReceiverOrderSlipStyle.customText3}>
                  City
                </CustomText>
                <CustomText style={ReceiverOrderSlipStyle.customText3}>
                  : Lorem Ipsum
                </CustomText>
              </View>

              {/* State fields */}
              <View style={{flexDirection: 'row'}}>
                <CustomText style={ReceiverOrderSlipStyle.customText3}>
                  State
                </CustomText>
                <CustomText style={ReceiverOrderSlipStyle.customText3}>
                  : Lorem Ipsum
                </CustomText>
              </View>

              {/* Country fields */}
              <View style={{flexDirection: 'row'}}>
                <CustomText style={ReceiverOrderSlipStyle.customText3}>
                  Country
                </CustomText>
                <CustomText style={ReceiverOrderSlipStyle.customText3}>
                  : Lorem Ipsum
                </CustomText>
              </View>

              {/* Pentode/Zip Code */}
              <View style={{flexDirection: 'row'}}>
                <CustomText style={ReceiverOrderSlipStyle.customText3}>
                  Pentode/Zip Code
                </CustomText>
                <CustomText
                  style={{
                    fontSize: hp('1.9%'),
                    color: colors.BLACK,
                    marginTop: wp('5%'),
                    fontFamily: 'NunitoSans-Regular',
                  }}>
                  : Lorem Ipsum
                </CustomText>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
