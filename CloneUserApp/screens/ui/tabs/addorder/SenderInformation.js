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
import DropDownPicker from 'react-native-dropdown-picker';
import {SenderInformationStyle} from './styles';
import downIcon from '../../../../assets/Image/ic_downn.png';
import upIcon from '../../../../assets/Image/ic_up.png';
import Toast from 'react-native-simple-toast';

const data = [
  {
    label: 'Indore',
    value: 'indore',
  },
  {
    label: 'Bhopal',
    value: 'bhopal',
  },
];
const state = [
  {
    label: 'Madhya Pradesh',
    value: 'madhya pradesh',
  },
  {
    label: 'Maharashta',
    value: 'maharashta',
  },
];
export default class SenderInformation extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
      isDropDown: false,
      isCity: false,
      isState: false,
      isCountry: false,
      isPinCode: false,
      cityname: '',
      statename: '',
      name: '',
      address: '',
      pincode: '',
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };

  addSenderInfo = () => {
    const {name, address, cityname, statename, pincode} = this.state;
    if (!name) {
      Toast.show("Please enter sender's name", Toast.LONG);
      return;
    }
    if (!address) {
      Toast.show("Please enter sender's address", Toast.LONG);
      return;
    }
    if (!cityname) {
      Toast.show("Please enter sender's city", Toast.LONG);
      return;
    }
    if (!statename) {
      Toast.show("Please enter sender's state", Toast.LONG);
      return;
    }
    if (!pincode) {
      Toast.show("Please enter sender's pincode", Toast.LONG);
      return;
    }

    const sender = {
      name,
      address,
      cityname,
      statename,
      pincode,
    };
    this.setState({expanded: false});
    Toast.show("Sender's information added", Toast.LONG);
    this.props.updateOrder(sender, 'senderInfo');
  };

  render() {
    return (
      <View style={SenderInformationStyle.container}>
        {/* <View  style={{justifyContent:'space-between',flex:1,flexDirection:'column'}} > */}
        <View style={SenderInformationStyle.secondContainer}>
          <TouchableOpacity
            onPress={this.changeLayout}
            style={SenderInformationStyle.thirdWrapper}>
            <Image
              source={require('../../../../assets/Image/ic_sender.png')}
              resizeMode="contain"
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                width: 40,
                height: 30,
                alignSelf: 'center',
              }}
            />
            <Text style={SenderInformationStyle.thirdWrapperText}>
              Sender Information
            </Text>

            <Image
              source={this.state.expanded === false ? downIcon : upIcon}
              // source={downIcon}
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
                marginTop: hp('3%'),
              }}>
              {/* <CustomText style={SenderInformationStyle.customText}>
                Name
              </CustomText>
              <CustomTextInputInfo
                keyboardType="default"
                returnKeyType="next"
                value={this.state.name}
                onChangeText={text => this.setState({name: text})}
                placeholder="Full Name"
                style={SenderInformationStyle.customText1}
              /> */}
              <Input
                label={'Name'}
                containerStyle={{
                  width: wp('75%'),
                  padding: 0,
                  marginLeft: -10,
                }}
                labelStyle={SenderInformationStyle.labelStyle}
                placeholder="Enter Name"
                onChangeText={text => this.setState({name: text})}
                inputStyle={SenderInformationStyle.inputStyle}
              />
              <Input
                label={'Address'}
                containerStyle={{
                  width: wp('75%'),
                  padding: 0,
                  marginLeft: -10,
                }}
                labelStyle={SenderInformationStyle.labelStyle}
                placeholder="Address"
                onChangeText={value => this.setState({comment: value})}
                inputStyle={SenderInformationStyle.inputStyle}
                onChangeText={text => this.setState({address: text})}
              />
              <DropDownPicker
                items={data}
                //defaultValue={this.state.cityname}
                containerStyle={{height: 40}}
                activeLabelStyle={{fontSize: hp('1.9%')}}
                labelStyle={{
                  fontSize: hp('1.9%'),
                  color: colors.FONT_COLOR,
                }}
                placeholder="Add City"
                placeholderStyle={{fontSize: hp('1.9%')}}
                style={{
                  backgroundColor: 'transparent',
                  borderWidth: 0,
                  marginLeft: -15,
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => this.setState({cityname: item.value})}
              />
              <DropDownPicker
                items={state}
                //defaultValue={this.state.cityname}
                containerStyle={{height: 40}}
                activeLabelStyle={{fontSize: hp('1.9%')}}
                labelStyle={{
                  fontSize: hp('1.9%'),
                  color: colors.FONT_COLOR,
                }}
                placeholder="Add State"
                placeholderStyle={{fontSize: hp('1.9%')}}
                style={{
                  backgroundColor: 'transparent',
                  borderWidth: 0,
                  marginLeft: -15,
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => this.setState({statename: item.value})}
              />
              <Input
                label={'Pincode'}
                containerStyle={{
                  width: wp('75%'),
                  padding: 0,
                  marginLeft: -10,
                  // backgroundColor: 'red',
                }}
                labelStyle={SenderInformationStyle.labelStyle}
                placeholder="Pincode"
                onChangeText={value => this.setState({comment: value})}
                inputStyle={SenderInformationStyle.inputStyle}
                onChangeText={text => this.setState({pincode: text})}
                value={this.state.pincode}
              />

              <TouchableOpacity
                onPress={this.addSenderInfo}
                style={{marginTop: 30, marginBottom: 10}}>
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
      </View>
    );
  }
}
