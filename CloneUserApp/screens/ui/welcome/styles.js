import {StyleSheet} from 'react-native';
import colors from '../../../configs/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const WelcomeScreenStyle = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
  },
  slide2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  slide3: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  slide4: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  text: {
    fontFamily: 'NunitoSans-Bold',
    color: colors.FONT_COLOR,
    fontSize: hp('3.2%'),
    marginTop: '20%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  des_text: {
    color: colors.FONT_COLOR,
    fontSize: hp('2.1%'),
    marginTop: hp('2%'),
    right: wp('5%'),
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'NunitoSans-Light',
  },
  slide1_view: {
    flexDirection: 'column',
    marginLeft: '10%',
  },
  loremTextStyle: {
    color: colors.FONT_COLOR,
    fontSize: hp('2.1%'),
    marginTop: hp('2%'),
    right: wp('5%'),
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'NunitoSans-Light',
  },
  loremTextStyle2: {
    color: colors.FONT_COLOR,
    fontSize: hp('2.1%'),
    marginTop: hp('5%'),
    right: wp('5%'),
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'NunitoSans-Light',
  },
  loremTextStyle3: {
    color: colors.FONT_COLOR,
    fontSize: hp('2.1%'),
    marginTop: hp('5%'),
    right: wp('5%'),
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'NunitoSans-Light',
  },
  loremTextStyle4: {
    color: colors.FONT_COLOR,
    fontSize: hp('2.1%'),
    marginTop: hp('5%'),
    right: wp('5%'),
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'NunitoSans-Light',
  },
  imgStyles1: {
    left: wp('5%'),
    width: wp('80%'),
    height: hp('50%'),
    marginTop: 20,
    marginRight: 70,
  },
  imgStyles2: {
    left: wp('5%'),
    width: wp('80%'),
    height: hp('50%'),
    marginTop: 20,
    marginRight: 70,
  },
  imgStyles3: {
    left: wp('5%'),
    width: wp('80%'),
    height: hp('50%'),
    marginTop: hp('5%'),
    marginRight: 70,
  },
  imgStyles4: {
    left: wp('5%'),
    bottom: hp('4%'),
    width: wp('80%'),
    height: hp('50%'),
    marginRight: 70,
  },
  activityIndicator: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  socialBtn: {
    // marginTop: -20,
  },
  googleBtn: {
    // flexDirection: 'column',
    width: 50,
    height: 50,
    marginLeft: 35,
  },
  facebookBtn: {
    // flexDirection: 'column',
    width: 50,
    height: 50,
  },
});