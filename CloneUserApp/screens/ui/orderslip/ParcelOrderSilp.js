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
import {ParcelOrderSlipStyle} from './styles';
export default class ParcelOrderSilp extends Component {
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
      <View style={ParcelOrderSlipStyle.container}>
        <View style={ParcelOrderSlipStyle.secondContainer}>
          <TouchableOpacity
            onPress={this.changeLayout}
            style={ParcelOrderSlipStyle.thirdWrapper}>
            <Image
              source={require('../../../assets/Image/ic_parcel_ifno.png')}
              resizeMode="contain"
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                width: 40,
                height: 30,
                alignSelf: 'center',
              }}
            />
            <Text style={ParcelOrderSlipStyle.thirdWrapperText}>
              Parcel Information
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
                marginTop: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <CustomText style={ParcelOrderSlipStyle.customText1}>
                  Item Name
                </CustomText>
                <CustomText style={ParcelOrderSlipStyle.customText2}>
                  : Lorem Ipsum
                </CustomText>
              </View>
              <View style={{flexDirection: 'row'}}>
                <CustomText style={ParcelOrderSlipStyle.customText3}>
                  Item Type
                </CustomText>
                <CustomText style={ParcelOrderSlipStyle.customText4}>
                  : Lorem Ipsum
                </CustomText>
              </View>
              <View style={{flexDirection: 'row'}}>
                <CustomText style={ParcelOrderSlipStyle.customText5}>
                  Parcel wait
                </CustomText>
                <CustomText style={ParcelOrderSlipStyle.customText6}>
                  : Lorem Ipsum
                </CustomText>
              </View>
              <View style={{flexDirection: 'column'}}>
                <CustomText style={ParcelOrderSlipStyle.customText7}>
                  Picture Upload
                </CustomText>
                <View style={{flexDirection: 'row'}}>
                  <View style={ParcelOrderSlipStyle.bottomImage1}>
                    <TouchableOpacity>
                      <Image
                        source={require('../../../assets/Image/ic_upload.png')}
                        resizeMode="contain"
                        style={{
                          alignSelf: 'center',
                          marginTop: '1.5%',
                          width: wp('13%'),
                          height: hp('13%'),
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={ParcelOrderSlipStyle.bottomImage2}>
                    <TouchableOpacity>
                      <Image
                        source={require('../../../assets/Image/ic_upload.png')}
                        resizeMode="contain"
                        style={{
                          marginLeft: wp('3%'),
                          marginTop: '1.5%',
                          width: wp('13%'),
                          height: hp('13%'),
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
