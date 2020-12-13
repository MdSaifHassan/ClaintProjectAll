import colors from '../../../../configs/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

export const ContactusScreenStyle = StyleSheet.create({
  container: {
    //flex: 1,

    // backgroundColor: 'yellow',
    paddingBottom: wp('20%'),
  },
  headerView: {
    // flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('5%'),
  },
  headerText: {
    alignSelf: 'center',
    fontSize: hp('3%'),
    color: colors.FONT_COLOR,
    fontFamily: 'NunitoSans-Bold',
  },
  // contentView: {
  //   flexDirection: 'column',
  //   marginTop: hp('8%'),
  //   marginLeft: wp('10%'),
  // },
  // contentText: {
  //   fontSize: hp('2%'),
  //   color: colors.BLACK,
  //   fontFamily: 'NunitoSans-Regular',
  // },
  // secontentView: {
  //   flexDirection: 'column',
  //   marginTop: hp('8%'),
  //   marginLeft: wp('10%'),

  // },
  submitButtonText: {
    color: colors.WHITE,
    fontSize: hp('3%'),
    fontFamily: 'NunitoSans-Regular',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  buttonDivStyle: {
    width: wp('90%'),
    alignSelf: 'center',
    //marginRight: 40,
    //marginLeft: 20,
    //left: wp('3%'),
    //paddingBottom: wp('30%'),
    //marginTop: 30,
  },
});
