import colors from '../../../../configs/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

export const HomeScreenStyle = StyleSheet.create({
  container: {
    height: hp('100%'),
    display: 'flex',
    flexDirection: 'column',
  },
  box1: {
    flexDirection: 'row',
    position: 'relative',
    width: wp('100%'),
    height: hp('13%'),
    backgroundColor: colors.FONT_COLOR,
  },
  box2: {
    flexDirection: 'row',
    position: 'relative',
    borderRadius: wp('5%'),
    alignSelf: 'center',
  },
  box3: {
    position: 'absolute',
    top: 120,
    left: 120,
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  text: {
    color: '#ffffff',
    fontSize: 80,
  },
  slide1: {
    flex: 1,
    alignSelf: 'center',
    borderRadius: wp('5%'),
    flexDirection: 'row',
  },
  slide2: {
    flex: 1,
    alignSelf: 'center',

    borderRadius: wp('5%'),
    flexDirection: 'row',
  },
  slide3: {
    flex: 1,
    alignSelf: 'center',

    borderRadius: wp('5%'),
    flexDirection: 'row',
  },
  slide4: {
    flex: 1,
    alignSelf: 'center',

    borderRadius: wp('5%'),
    flexDirection: 'row',
  },
  text: {
    color: colors.FONT_COLOR,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '20%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  des_text: {
    color: colors.FONT_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '20%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  slide1_view: {
    flexDirection: 'column',
    marginLeft: '10%',
  },
  contentViews: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    height: hp('25%'),
  },
  insideCardStyle: {
    color: colors.FONT_COLOR,
  },
  imageStyle: {
    width: wp('5.1%'),
    height: hp('5.1%'),
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 20,
  },
  YourLocationDivStyle: {
    fontFamily: 'NunitoSans-Regular',
    flexDirection: 'column',
    marginLeft: 12,
    marginTop: hp('2.5%'),
  },
  textStyle1: {
    color: colors.WHITE,
    fontSize: hp('2.1%'),
    fontFamily: 'NunitoSans-Bold',
    //width: wp('23%'),
  },
  mainTouchDivStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 20,
  },
  imageStyle2: {
    aspectRatio: 2.2,
    flex: 1,
    flexDirection: 'row',
    // height: hp('20%'),
    borderRadius: wp('5%'),
    alignSelf: 'center',
  },
  imageStyle3: {
    aspectRatio: 2.2,
    flex: 1,
    flexDirection: 'row',
    height: hp('35%'),
    borderRadius: wp('5%'),
    alignSelf: 'center',
  },
  imageStyle4: {
    aspectRatio: 2.2,
    flex: 1,
    flexDirection: 'row',
    height: hp('35%'),
    borderRadius: wp('5%'),
    alignSelf: 'center',
  },
  imageStyle5: {
    aspectRatio: 2.2,
    flex: 1,
    flexDirection: 'row',
    height: hp('35%'),
    borderRadius: wp('5%'),
    alignSelf: 'center',
  },
});
