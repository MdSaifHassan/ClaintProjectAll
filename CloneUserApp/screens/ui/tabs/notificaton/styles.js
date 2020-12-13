import colors from '../../../../configs/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

export const NotificationScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headerView: {
    flexDirection: 'row',
    marginTop: hp('5%'),
  },
  headerText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: hp('3%'),
    color: colors.FONT_COLOR,
    fontFamily: 'NunitoSans-Bold',
  },
  contentView: {
    flexDirection: 'column',
    marginTop: hp('10%'),
    marginLeft: wp('6.5%'),
  },
  contentText: {
    fontSize: hp('1.9%'),
    color: colors.BLACK,
    fontFamily: 'NunitoSans-Bold',
  },
  NotificationDivStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageViewStyle: {
    width: wp('9%'),
    height: hp('9%'),
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  loremTextViewStyle: {
    flexDirection: 'column',
    alignSelf: 'center',
    width: wp('50%'),
    height: 'auto',
    right: wp('5%'),
  },
  yestrrDTextViewStyle: {
    marginRight: hp('20%'),
    color: colors.BLACK,
    fontSize: hp('2.2%'),
    fontFamily: 'NunitoSans-Bold',
  },
  imgMainViewStyle: {
    marginTop: hp('7%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  imgSubMainViewStyle: {
    width: wp('9%'),
    height: hp('9%'),
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  loremMainViewStyle: {
    flexDirection: 'column',
    alignSelf: 'center',
    width: wp('50%'),
    height: 'auto',
    right: wp('5%'),
  },
});
