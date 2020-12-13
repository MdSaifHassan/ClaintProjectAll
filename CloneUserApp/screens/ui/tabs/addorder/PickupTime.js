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
import {ListItem, Card, Overlay} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import {PickupTimeStyle} from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import Toast from 'react-native-simple-toast';
import downIcon from '../../../../assets/Image/ic_downn.png';
import upIcon from '../../../../assets/Image/ic_up.png';
import {timeSlot} from '../../../../utils/parcel';

export default class PickupTime extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
      postType: '',
      timeSlot: '',
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

  handleConfirm = () => {
    const {postType, timeSlot} = this.state;
    if (!timeSlot) {
      Toast.show('Please choose a time slot', Toast.LONG);
      return;
    }
    if (!postType) {
      Toast.show("Please choose either 'Speed Post' or 'Parcel'", Toast.LONG);
      return;
    }

    const pickupInfo = {
      timeSlot,
      postType,
    };
    this.setState({expanded: false});
    Toast.show('Pick up time added', Toast.LONG);
    this.props.updateOrder(pickupInfo, 'pickupTime');
  };

  render() {
    const {postType} = this.state;
    return (
      <View style={PickupTimeStyle.container}>
        {/* <View  style={{justifyContent:'space-between',flex:1,flexDirection:'column'}} > */}
        <View style={PickupTimeStyle.secondContainer}>
          <TouchableOpacity
            onPress={this.changeLayout}
            style={PickupTimeStyle.thirdWrapper}>
            <Image
              source={require('../../../../assets/Image/ic_pic_time.png')}
              resizeMode="contain"
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                width: 40,
                height: 30,
                alignSelf: 'center',
              }}
            />
            <Text style={PickupTimeStyle.thirdWrapperText}>Pickup Time</Text>
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
                marginTop: hp('3%'),
              }}>
              <CustomText style={PickupTimeStyle.customText}>
                Add Time
              </CustomText>

              <DropDownPicker
                items={timeSlot}
                //defaultValue={this.state.cityname}
                containerStyle={{height: 40}}
                activeLabelStyle={{
                  fontSize: hp('1.9%'),
                }}
                labelStyle={{
                  fontSize: hp('1.9%'),
                }}
                placeholder="Choose slot"
                placeholderStyle={{
                  fontSize: hp('1.9%'),
                  // color: colors.GREY,
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
                    timeSlot: item.value,
                  })
                }
              />
            </View>
            <View style={PickupTimeStyle.buttonStyle}>
              <TouchableOpacity
                style={
                  postType === 'speed post'
                    ? PickupTimeStyle.btnSelectedStyle
                    : PickupTimeStyle.buttonStyle1
                }
                onPress={() =>
                  this.setState({
                    postType: 'speed post',
                  })
                }>
                <Text style={PickupTimeStyle.buttonText}>Speed Post</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  postType === 'parcel'
                    ? PickupTimeStyle.btnSelectedStyle
                    : PickupTimeStyle.buttonStyle1
                }
                onPress={() =>
                  this.setState({
                    postType: 'parcel',
                  })
                }>
                <Text style={PickupTimeStyle.buttonText}>Parcel</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={this.handleConfirm}
              style={{
                marginTop: 30,
                marginBottom: 10,
                marginLeft: 10,
              }}>
              <View
                style={{
                  backgroundColor: colors.FONT_COLOR,
                  width: 75,
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
