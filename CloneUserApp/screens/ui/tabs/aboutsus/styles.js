import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../../configs/color';
import {StyleSheet} from 'react-native';
export const AboutStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: wp('10%'),
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('7%'),
  },
  headerText: {
    alignSelf: 'center',
    fontSize: hp('3%'),
    color: colors.FONT_COLOR,
    fontFamily: 'NunitoSans-Bold',
  },
  contentView: {
    flexDirection: 'column',
    marginTop: hp('5%'),
    marginLeft: wp('10%'),
    backgroundColor: colors.WHITE_GREY,
    padding: wp('4%'),
    marginRight: wp('10%'),
  },
  contentText: {
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Regular',
    color: colors.BLACK,
    marginLeft: wp('3%'),
  },
  secontentView: {
    flexDirection: 'column',
    padding: wp('4%'),
    marginRight: wp('10%'),
  },
});
