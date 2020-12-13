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
import CustomText from '../../../../components/CustomText';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../../configs/color';
import {NotificationScreenStyle} from './styles';

function NotificationScreen({navigation}) {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      {/*Status Bar  */}
      <StatusBar backgroundColor={colors.FONT_COLOR} />
      {/*Main Container  */}
      <View style={NotificationScreenStyle.container}>
        {/*Header   */}
        <View style={NotificationScreenStyle.headerView}>
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
          <View style={NotificationScreenStyle.NotificationDivStyle}>
            <CustomText style={NotificationScreenStyle.headerText}>
              Notification
            </CustomText>
          </View>
        </View>

        {/*Header End */}
        {/*Content View */}
        <View style={NotificationScreenStyle.contentView}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <View style={NotificationScreenStyle.imageViewStyle}>
              <Image
                source={require('../../../../assets/Image/ic_bell_y.png')}
                resizeMode="contain"
                style={{alignSelf: 'center', width: wp('7%'), height: hp('7%')}}
              />
            </View>

            <View style={NotificationScreenStyle.loremTextViewStyle}>
              <CustomText
                style={{
                  color: colors.BLACK,
                  fontFamily: 'NunitoSans-Regular',
                  fontSize: hp('1.9%'),
                }}>
                Lorem Ipsum is simply dummy text of the printing
              </CustomText>
              <CustomText
                style={{
                  color: colors.GREY,
                  fontSize: hp('1.9%'),
                  fontFamily: 'NunitoSans-Regular',
                }}>
                Name Sender
              </CustomText>
            </View>

            <View
              style={{
                right: wp('3%'),
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <CustomText
                style={{
                  color: colors.GREY,
                  fontSize: hp('1.9%'),
                  fontFamily: 'NunitoSans-Regular',
                }}>
                12:01PM
              </CustomText>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              marginLeft: wp('4%'),
              marginTop: hp('9%'),
            }}>
            <CustomText style={NotificationScreenStyle.yestrrDTextViewStyle}>
              Yesterday
            </CustomText>
          </View>

          <View style={NotificationScreenStyle.imgMainViewStyle}>
            <View style={NotificationScreenStyle.imgSubMainViewStyle}>
              <Image
                source={require('../../../../assets/Image/ic_package.png')}
                resizeMode="contain"
                style={{alignSelf: 'center', width: wp('7%'), height: hp('7%')}}
              />
            </View>
            <View style={NotificationScreenStyle.loremMainViewStyle}>
              <CustomText
                style={{
                  color: colors.BLACK,
                  fontSize: hp('1.9%'),
                  fontFamily: 'NunitoSans-Regular',
                }}>
                Lorem Ipsum is simply dummy text of the printing
              </CustomText>
              <CustomText
                style={{
                  color: colors.GREY,
                  fontSize: hp('1.9%'),
                  fontFamily: 'NunitoSans-Regular',
                }}>
                Name Sender
              </CustomText>
            </View>

            <View
              style={{
                right: wp('3%'),
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <CustomText
                style={{
                  color: colors.GREY,
                  fontSize: hp('1.9%'),
                  fontFamily: 'NunitoSans-Regular',
                }}>
                12:01PM
              </CustomText>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
export default NotificationScreen;
