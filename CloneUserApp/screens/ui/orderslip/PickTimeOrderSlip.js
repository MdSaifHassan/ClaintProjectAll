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
import CustomText from '../../../components/CustomText';
import {
  CustomTextInputInfo,
  FullButtonComponent,
} from '../../../components/customview';
import colors from '../../../configs/color';
import {Footer} from '../../../components/footer';
import {GenericStyles} from '../otp/GenericStyles';
import {PickTimeOrderSlipStyle} from './styles';
export default class PickTimeOrderSlip extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
      isDropDown: false,
      isCity: false,
      isState: false,
      isCountry: false,
      isPinCode: false,
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

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
    return (
      <View style={PickTimeOrderSlipStyle.container}>
        <View style={PickTimeOrderSlipStyle.secondContainer}>
          <TouchableOpacity
            onPress={this.changeLayout}
            style={PickTimeOrderSlipStyle.thirdWrapper}>
            <Image
              source={require('../../../assets/Image/ic_pic_time.png')}
              resizeMode="contain"
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                width: 40,
                height: 30,
                alignSelf: 'center',
              }}
            />
            <Text style={PickTimeOrderSlipStyle.thirdWrapperText}>
              Pickup Time
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
              <CustomText style={PickTimeOrderSlipStyle.customText1}>
                Pickup Slot
              </CustomText>
              <CustomText style={PickTimeOrderSlipStyle.customText2}>
                Speed post
              </CustomText>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: hp('3%'),
                marginLeft: wp('3%'),
              }}>
              <View style={{marginRight: 40, marginLeft: 20}}>
                <FullButtonComponent
                  type={'fill'}
                  text={' Tracking'}
                  textStyle={PickTimeOrderSlipStyle.submitButtonText}
                  buttonStyle={PickTimeOrderSlipStyle.mt24}
                />
              </View>
              <View style={{marginRight: 40, marginLeft: 20}}>
                <FullButtonComponent
                  type={'fill'}
                  text={' Payment Pendind'}
                  textStyle={PickTimeOrderSlipStyle.submitButtonText}
                  buttonStyle={PickTimeOrderSlipStyle.mt24}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
