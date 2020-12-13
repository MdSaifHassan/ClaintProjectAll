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
import {SenderOrderSliptStyle} from './styles';
export default class SenderOrderSilp extends Component {
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
      <View style={SenderOrderSliptStyle.container}>
        <View style={SenderOrderSliptStyle.secondContainer}>
          <TouchableOpacity
            onPress={this.changeLayout}
            style={SenderOrderSliptStyle.thirdWrapper}>
            <Image
              source={require('../../../assets/Image/ic_sender.png')}
              resizeMode="contain"
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                width: 40,
                height: 30,
                alignSelf: 'center',
              }}
            />
            <Text style={SenderOrderSliptStyle.thirdWrapperText}>
              Sender Information
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
                <CustomText style={SenderOrderSliptStyle.customText}>
                  Name
                </CustomText>
                <CustomText style={SenderOrderSliptStyle.customText}>
                  : Lorem Ipsum
                </CustomText>
              </View>

              <View style={{flexDirection: 'row'}}>
                <CustomText style={SenderOrderSliptStyle.customText}>
                  Address
                </CustomText>
                <CustomText style={SenderOrderSliptStyle.customText}>
                  : Lorem Ipsum
                </CustomText>
              </View>

              <View style={{flexDirection: 'row'}}>
                <CustomText style={SenderOrderSliptStyle.customText}>
                  City
                </CustomText>
                <CustomText style={SenderOrderSliptStyle.customText}>
                  : Lorem Ipsum
                </CustomText>
              </View>

              <View style={{flexDirection: 'row'}}>
                <CustomText style={{fontSize: hp('1.9%'), marginTop: wp('5%')}}>
                  State
                </CustomText>
                <CustomText style={SenderOrderSliptStyle.customText}>
                  : Lorem Ipsum
                </CustomText>
              </View>

              <View style={{flexDirection: 'row'}}>
                <CustomText style={{fontSize: hp('1.9%'), marginTop: wp('5%')}}>
                  Pin Code
                </CustomText>
                <CustomText
                  style={{
                    fontSize: hp('1.9%'),
                    fontFamily: 'NunitoSans-Regular',
                    color: colors.BLACK,
                    marginTop: wp('5%'),
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
