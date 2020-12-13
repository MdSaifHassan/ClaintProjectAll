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
import colors from '../../../../configs/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomTextInputInfo from '../../../../components/CustomTextInputInfo';
import CustomText from '../../../../components/CustomText';
import {ListItem, Card, Overlay, Input} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import {ParcelInformationStyle} from './styles';
import Toast from 'react-native-simple-toast';
import downIcon from '../../../../assets/Image/ic_downn.png';
import upIcon from '../../../../assets/Image/ic_up.png';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  category,
  DomesticType,
  internationalType,
} from '../../../../utils/parcel';

const state = [
  {
    label: 'Indore',
    value: 'indore',
  },
  {
    label: 'Bhopal',
    value: 'bhopal',
  },
];

export default class ParcelrInformation extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
      parcelName: '',
      parcelCategory: '',
      parcelType: '',
      weight: '',
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  addParcel = () => {
    const {parcelName, parcelCategory, parcelType, weight} = this.state;
    if (!parcelName) {
      Toast.show('Please enter parcel name', Toast.LONG);
      return;
    }
    if (!parcelCategory) {
      Toast.show('Please enter parcel category', Toast.LONG);
      return;
    }
    if (!parcelType) {
      Toast.show('Please enter parcel type', Toast.LONG);
      return;
    }
    if (!weight) {
      Toast.show('Please enter parcel weight', Toast.LONG);
      return;
    }

    const info = {
      name: parcelName,
      category: parcelCategory,
      type: parcelType,
      weight,
    };
    this.setState({expanded: false});
    Toast.show('Parcel information added', Toast.LONG);
    this.props.updateOrder(info, 'parcelInfo');
  };

  render() {
    return (
      <View style={ParcelInformationStyle.container}>
        {/* <View  style={{justifyContent:'space-between',flex:1,flexDirection:'column'}} > */}
        <View style={ParcelInformationStyle.secondContainer}>
          <TouchableOpacity
            onPress={this.changeLayout}
            style={ParcelInformationStyle.thirdWrapper}>
            <Image
              source={require('../../../../assets/Image/ic_parcel_ifno.png')}
              resizeMode="contain"
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                width: 40,
                height: 30,
                alignSelf: 'center',
              }}
            />
            <Text style={ParcelInformationStyle.thirdWrapperText}>
              Parcel Information
            </Text>

            <Image
              source={this.state.expanded === false ? downIcon : upIcon}
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
              <Input
                label={'Add Name'}
                containerStyle={{
                  width: wp('75%'),
                  padding: 0,
                  marginLeft: -10,
                }}
                labelStyle={ParcelInformationStyle.customText}
                placeholder="Item Name"
                onChangeText={value => this.setState({comment: value})}
                inputStyle={ParcelInformationStyle.inputStyle}
                onChangeText={text => this.setState({parcelName: text})}
                value={this.state.pincode}
              />

              <View>
                <CustomText
                  style={(ParcelInformationStyle.customText, {marginTop: 10})}>
                  Select Category
                </CustomText>
                <DropDownPicker
                  items={category}
                  //defaultValue={this.state.cityname}
                  containerStyle={{height: 40}}
                  activeLabelStyle={{
                    fontSize: hp('1.9%'),
                  }}
                  labelStyle={{
                    fontSize: hp('1.9%'),
                  }}
                  placeholder="Parcel Category"
                  placeholderStyle={{
                    fontSize: hp('1.9%'),
                  }}
                  style={{
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                    marginLeft: -15,
                  }}
                  itemStyle={{
                    justifyContent: 'flex-start',
                  }}
                  dropDownStyle={{
                    backgroundColor: '#fafafa',
                  }}
                  onChangeItem={item =>
                    this.setState({
                      parcelCategory: item.value,
                    })
                  }
                />
              </View>

              <View>
                <CustomText
                  style={(ParcelInformationStyle.customText, {marginTop: 10})}>
                  Select Parcel type
                </CustomText>
                <DropDownPicker
                  disabled={this.state.parcelCategory ? false : true}
                  items={
                    this.state.category === 'Domestic'
                      ? DomesticType
                      : internationalType
                  }
                  //defaultValue={this.state.cityname}
                  containerStyle={{height: 40}}
                  activeLabelStyle={{
                    fontSize: hp('1.9%'),
                  }}
                  labelStyle={{
                    fontSize: hp('1.9%'),
                  }}
                  placeholder="Parcel type"
                  placeholderStyle={{
                    fontSize: hp('1.9%'),
                  }}
                  style={{
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                    marginLeft: -15,
                  }}
                  itemStyle={{
                    justifyContent: 'flex-start',
                  }}
                  dropDownStyle={{
                    backgroundColor: '#fafafa',
                  }}
                  onChangeItem={item =>
                    this.setState({
                      parcelType: item.value,
                    })
                  }
                />
              </View>

              <View>
                <Input
                  label={'Parcel Dimensions'}
                  containerStyle={{
                    width: wp('75%'),
                    padding: 0,
                    marginLeft: -10,
                  }}
                  labelStyle={ParcelInformationStyle.customText}
                  placeholder="weight in grams"
                  inputStyle={ParcelInformationStyle.inputStyle}
                  onChangeText={text => this.setState({weight: text})}
                  value={this.state.pincode}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                // marginTop: 10,
              }}>
              <TouchableOpacity>
                <Image
                  source={require('../../../../assets/Image/ic_upload.png')}
                  resizeMode="contain"
                  style={{
                    marginTop: '1.5%',
                    width: wp('13%'),
                    height: hp('13%'),
                  }}
                />
              </TouchableOpacity>
              {/* <CustomText>Add Image</CustomText> */}
            </View>
            <TouchableOpacity
              onPress={this.addParcel}
              style={{
                marginTop: 30,
                marginBottom: 10,
                marginLeft: 10,
              }}>
              <View
                style={{
                  backgroundColor: colors.FONT_COLOR,
                  width: 80,
                  padding: 12,
                  borderRadius: 5,
                }}>
                <Text style={{color: colors.WHITE}}>confirm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
