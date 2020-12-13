import {StyleSheet} from 'react-native';
import colors from '../../../../configs/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const SenderInformationStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  secondContainer: {
    borderWidth: 1.2,
    borderColor: colors.WHITE_GREY,
    justifyContent: 'center',
    width: wp('91.5%'),
    alignSelf: 'center',
    marginTop: 30,
    paddingBottom: 10,
  },
  thirdWrapper: {
    flex: 1,
    height: wp('17%'),
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thirdWrapperText: {
    flexDirection: 'row',
    fontSize: hp('2.5%'),
    fontFamily: 'NunitoSans-Bold',
    alignSelf: 'center',
  },
  customText: {
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
    marginTop: wp('5%'),
    color: colors.FONT_COLOR,
  },
  customText1: {
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
    color: colors.FONT_COLOR,
  },
  customText2: {
    width: wp('75%'),
    alignSelf: 'center',
    fontSize: hp('1.9%'),
    marginTop: wp('2.5%'),
    color: colors.GREY,
    fontFamily: 'NunitoSans-Regular',
  },
  inputStyle: {
    padding: 0,
    fontSize: hp('1.9%'),
    marginTop: wp('2.5%'),
    color: colors.GREY,
    fontFamily: 'NunitoSans-Regular',
  },
  labelStyle: {
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
    color: colors.FONT_COLOR,
    padding: 0,
    marginBottom: -10,
  },
});

// ReceiverInformationStyle
export const ReceiverInformationStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  secondContainer: {
    borderWidth: 1.2,
    borderColor: colors.WHITE_GREY,
    justifyContent: 'center',
    width: wp('91.5%'),
    alignSelf: 'center',
    marginTop: 30,
    paddingBottom: 10,
  },
  thirdWrapper: {
    flex: 1,
    height: wp('17%'),
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thirdWrapperText: {
    flexDirection: 'row',
    fontSize: hp('2.5%'),
    fontFamily: 'NunitoSans-Bold',
    alignSelf: 'center',
  },
  customText: {
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
    marginBottom: -10,
  },
  customText1: {
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
    marginTop: wp('5%'),
  },
  customText2: {
    width: wp('75%'),
    alignSelf: 'center',
    fontSize: hp('1.9%'),
    marginTop: wp('2.5%'),
    color: colors.GREY,
    fontFamily: 'NunitoSans-Regular',
  },
  inputStyle: {
    width: wp('75%'),
    alignSelf: 'center',
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
    marginTop: wp('2.9%'),
    color: colors.GREY,
  },
  labelStyle: {
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
    color: colors.FONT_COLOR,
    padding: 0,
    marginBottom: -10,
  },
});

// AddOrderScreensStyle
export const AddOrderScreensStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  headerText: {
    color: colors.FONT_COLOR,
    textAlign: 'center',
    fontSize: hp('3%'),
    margin: 35,
    fontFamily: 'NunitoSans-Bold',
  },
  contentView: {
    height: 60,
    flexDirection: 'row',
    marginTop: 25,
  },
  contentViewText: {
    flex: 1,
    fontSize: hp('2%'),
    fontFamily: 'NunitoSans-Regular',
    marginLeft: '6%',
    color: colors.DARK_GREY,
  },
  submitButtonText: {
    color: colors.WHITE,
    fontSize: hp('2.3%'),
    fontFamily: 'NunitoSans-Regular',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  secondContainer: {
    aspectRatio: 5.1,
    flex: 1,
    height: wp('18%'),
    borderWidth: 1.2,
    borderColor: colors.WHITE_GREY,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  thirdWrapperText: {
    flexDirection: 'row',
    fontSize: hp('2.5%'),
    right: wp('6.2%'),
    fontFamily: 'NunitoSans-Bold',
    alignSelf: 'center',
  },
  activityIndicator: {
    marginBottom: 10,
  },
});

// ParcelInformationStyle
export const ParcelInformationStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  text: {
    fontSize: 17,
    color: 'black',
    padding: 10,
  },

  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },

  btnTextHolder: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)',
  },

  Btn: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  listontainer: {
    flex: 1,
    paddingTop: 2,
  },
  item: {
    flex: 1,
    fontFamily: 'NunitoSans-Regular',
    fontSize: hp('1.9%'),
    height: 44,
  },
  secondContainer: {
    borderWidth: 1.2,
    borderColor: colors.WHITE_GREY,
    justifyContent: 'center',
    width: wp('91.5%'),
    alignSelf: 'center',
    marginTop: 30,
    paddingBottom: 10,
  },
  thirdWrapper: {
    flex: 1,
    height: wp('18%'),
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thirdWrapperText: {
    flexDirection: 'row',
    right: 9,
    fontSize: hp('2.5%'),
    fontFamily: 'NunitoSans-Bold',
    alignSelf: 'center',
  },
  customText: {
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
    color: colors.GREY,
    marginBottom: -10,
  },

  inputStyle: {
    padding: 0,
    fontSize: hp('1.9%'),
    marginTop: wp('2.5%'),
    color: colors.GREY,
    fontFamily: 'NunitoSans-Regular',
  },

  Text1: {
    height: 30,
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
    marginTop: wp('1%'),
    textAlign: 'center',
  },
  CustomTextInputInfo: {
    marginTop: 10,
    width: wp('75%'),
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
    color: colors.GREY,
  },
  Text2: {
    height: 30,
    fontSize: hp('1.9%W'),
    fontFamily: 'NunitoSans-Regular',
    textAlign: 'center',
  },
});

// PickupTimeStyle
export const PickupTimeStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  secondContainer: {
    borderWidth: 1.2,
    borderColor: colors.WHITE_GREY,
    justifyContent: 'center',
    width: wp('91.5%'),
    alignSelf: 'center',
    marginTop: 30,
    paddingBottom: 10,
  },
  thirdWrapper: {
    flex: 1,
    height: wp('18%'),
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thirdWrapperText: {
    flexDirection: 'row',
    right: wp('10.5%'),
    fontFamily: 'NunitoSans-Bold',
    fontSize: hp('2.5%'),
    alignSelf: 'center',
  },
  customText: {
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
  },
  customText1: {
    width: wp('75%'),
    alignSelf: 'center',
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
    color: colors.GREY,
  },
  buttonStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  buttonStyle1: {
    justifyContent: 'center',
    width: wp('40%'),
    height: hp('7%'),
    borderColor: colors.FONT_COLOR,
    borderWidth: 1.2,
    borderRadius: 3,
  },
  btnSelectedStyle: {
    justifyContent: 'center',
    width: wp('40%'),
    height: hp('7%'),
    borderColor: colors.FONT_COLOR,
    borderWidth: 3,
    borderRadius: 3,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
    color: colors.FONT_COLOR,
  },
});

// PolicyScreenStyle

export const PolicyScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headerView: {
    flexDirection: 'row',
    marginTop: hp('5%'),
  },
  headerText: {
    marginLeft: hp('2%'),
    fontSize: hp('3.2%'),
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
    fontSize: hp('2.3%'),
    fontFamily: 'NunitoSans-Bold',
    color: colors.BLACK,
  },
  submitButtonText: {
    color: colors.WHITE,
    fontSize: 17,
  },
  headerInnerWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: wp('11%'),
  },
});
