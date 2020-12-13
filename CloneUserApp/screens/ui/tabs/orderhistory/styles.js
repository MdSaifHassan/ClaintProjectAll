import {StyleSheet} from 'react-native';
import colors from '../../../../configs/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const OrderHistoryScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.WHITE,
  },
  headerView: {
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    height: wp('15%'),
    justifyContent: 'center',
  },
  headerText: {
    alignSelf: 'center',
    fontSize: hp('3%'),
    fontFamily: 'NunitoSans-Bold',
    color: colors.FONT_COLOR,
    marginTop: wp('20%'),
  },
  contentView: {
    marginTop: wp('15%'),
    flexDirection: 'column',
    backgroundColor: 'transparent',
    // height:hp('100%')
  },
  contentViews: {
    marginLeft: '2%',
    marginRight: '2%',
    backgroundColor: 'transparent',
  },
  insideCardStyle: {
    color: colors.FONT_COLOR,
  },
});
