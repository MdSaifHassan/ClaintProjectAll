import colors from '../../../configs/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

export const SavelLocationScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headerView: {
    flexDirection: 'row',
    marginTop: hp('5%'),
  },
  headerText: {
    marginLeft: wp('6%'),
    fontSize: hp('3%'),
    color: colors.FONT_COLOR,
    fontFamily: 'NunitoSans-Bold',
  },
  contentView: {
    flexDirection: 'row',
    marginTop: hp('4%'),
    alignSelf: 'center',
  },
  contentText: {
    fontSize: wp('5%'),
    color: colors.BLACK,
  },
  addressHeader: {
    marginLeft: wp('7%'),
    fontSize: hp('2%'),
    fontFamily: 'NunitoSans-Bold',
    color: colors.BLACK,
  },
  submitButtonText: {
    color: colors.WHITE,
    fontSize: hp('2.3%'),
  },
  profileStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: wp('11%'),
  },
  mainCustomDivStyle: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: wp('4%'),
    marginRight: wp('4%'),
    marginTop: wp('12%'),
    borderRadius: wp('3%'),
    backgroundColor: colors.WHITE,
    height: wp('15%'),
  },
  customImageStyle: {
    width: wp('6%'),
    height: hp('6%'),
    marginLeft: wp('4%'),
    alignSelf: 'center',
  },
  customTextInputStyle: {
    fontFamily: 'NunitoSans-Regular',
    position: 'absolute',
    width: wp('75%'),
    marginLeft: wp('2.5%'),
    marginTop: wp('2%'),
    height: hp('6.8%'),
    fontSize: hp('1.9%'),
    color: colors.GREY,
    alignSelf: 'center',
  },
  secondTextInputStyle: {
    position: 'absolute',
    width: wp('70%'),
    height: hp('7%'),
    justifyContent: 'center',
    marginLeft: wp('5%'),
    fontFamily: 'NunitoSans-Regular',
    fontSize: hp('1.9%'),
    fontWeight: 'bold',
  },
  thirdTextInputStyle: {
    position: 'absolute',
    width: wp('70%'),
    height: hp('7%'),
    justifyContent: 'center',
    marginLeft: wp('5%'),
    fontFamily: 'NunitoSans-Regluar',
    fontSize: hp('1.9%'),
    fontWeight: 'bold',
  },
  customImageStyle4: {
    tintColor: colors.FONT_COLOR,
    width: wp('7%'),
    height: hp('7%'),
    marginTop: wp('1%'),
  },
  homeCustomTextStyle: {
    fontFamily: 'NunitoSans-Bold',
    alignSelf: 'center',
    marginLeft: wp('5%'),
    fontSize: hp('1.9%'),
  },
  officeCustomTextStyle: {
    fontFamily: 'NunitoSans-Bold',
    alignSelf: 'center',
    marginLeft: wp('5%'),
    fontSize: hp('1.9%'),
  },
  otherCustomTextStyle: {
    fontFamily: 'NunitoSans-Bold',
    alignSelf: 'center',
    marginLeft: wp('5%'),
    fontSize: hp('1.9%'),
  },
  buttonDivStyle: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: wp('10%'),
    marginBottom: 100,
  },
});
