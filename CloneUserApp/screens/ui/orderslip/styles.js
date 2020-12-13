import colors from '../../../configs/color';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const OrderSlipScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headerView: {
    flexDirection: 'row',
    marginTop: hp('5%'),
  },
  headerText: {
    marginLeft: hp('9%'),
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
    fontSize: hp('1.9%'),
    color: colors.BLACK,
  },
  addressHeader: {
    marginLeft: wp('5%'),
    fontSize: hp('2.1%'),
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  OrderDetails: {
    flex: 1,
    //flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    //marginLeft: wp('11%'),
  },
});

// ParcelOrderSelipStyle
export const ParcelOrderSlipStyle = StyleSheet.create({
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
    height: wp('17%'),
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
  customText1: {
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
    marginTop: wp('5%'),
  },
  customText2: {
    fontSize: hp('1.9%'),
    color: colors.BLACK,
    marginTop: wp('5%'),
    fontFamily: 'NunitoSans-Regular',
  },
  customText3: {
    fontSize: hp('1.9%'),
    marginTop: wp('5%'),
    fontFamily: 'NunitoSans-Regular',
  },
  customText4: {
    fontSize: hp('1.9%'),
    color: colors.BLACK,
    marginTop: wp('5%'),
    fontFamily: 'NunitoSans-Regular',
  },
  customText5: {
    fontSize: hp('1.9%'),
    marginTop: wp('5%'),
    fontFamily: 'NunitoSans-Regular',
  },
  customText6: {
    fontSize: hp('1.9%'),
    color: colors.BLACK,
    marginTop: wp('5%'),
    fontFamily: 'NunitoSans-Regular',
  },
  customText7: {
    fontSize: hp('1.9%'),
    marginTop: wp('5%'),
    fontFamily: 'NunitoSans-Regular',
  },
  bottomImage1: {
    aspectRatio: 1,
    justifyContent: 'center',
    width: wp('20%'),
    height: 'auto',
    borderWidth: 1.2,
    borderColor: colors.BLACK,
    marginTop: hp('2%'),
  },
  bottomImage2: {
    aspectRatio: 1,
    width: wp('20%'),
    height: 'auto',
    borderWidth: 1.2,
    borderColor: colors.BLACK,
    marginLeft: wp('3%'),
    marginTop: hp('2%'),
  },
});

// PickTimeOrderSlip Screen Style

export const PickTimeOrderSlipStyle = StyleSheet.create({
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

    fontSize: 18,
    height: 44,
  },
  submitButtonText: {
    color: colors.WHITE,
    fontSize: hp('2.3'),
    fontFamily: 'NunitoSans-Regular',
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
    right: wp('9.5%'),
    fontSize: hp('2.5%'),
    fontFamily: 'NunitoSans-Bold',
    alignSelf: 'center',
  },
  customText1: {
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
  },
  customText2: {
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
    marginTop: hp('2.2%'),
    color: colors.FONT_COLOR,
  },
});
// ////////////ReceiverOrderSlipStyle

export const ReceiverOrderSlipStyle = StyleSheet.create({
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
  customText1: {
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
    color: colors.GREY,
  },
  customText2: {
    fontSize: hp('1.9%'),
    color: colors.BLACK,
    fontFamily: 'NunitoSans-Regular',
  },
  customText3: {
    fontSize: hp('1.9%'),
    color: colors.BLACK,
    marginTop: wp('5%'),
    fontFamily: 'NunitoSans-Regular',
  },
});
// //////ReceiverOrderSlipStyle

export const SenderOrderSliptStyle = StyleSheet.create({
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
    color: colors.BLACK,
    marginTop: wp('5%'),
  },
});
