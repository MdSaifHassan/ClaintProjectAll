import colors from '../../../configs/color';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const GooglePlacesAutocompleteStyles = {
  textInputContainer: {
    marginTop: wp('12%'),
    borderColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: 'transparent',
    height: hp('7%'),
    marginLeft: wp('8%'),
    marginRight: wp('8%'),
  },

  textInput: {
    height: hp('6.5%'),
    backgroundColor: 'transparent',

    borderColor: colors.FONT_COLOR,
    borderWidth: 2,
    fontSize: 16,
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
    backgroundColor: 'transparent',
  },
  container: {
    backgroundColor: 'transparent',
  },
  listView: {
    backgroundColor: 'transparent',
  },
  row: {
    backgroundColor: 'transparent',
    height: hp('10%'),
  },
  poweredContainer: {
    backgroundColor: 'transparent',
    marginLeft: wp('8%'),
    marginRight: wp('8%'),
  },
  description: {marginLeft: wp('8%'), marginRight: wp('8%')},
  separator: {marginLeft: wp('8%'), marginRight: wp('8%')},
};

export const SearchYourLocationStyles = StyleSheet.create({
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
    marginLeft: wp('5%'),
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: colors.BLACK,
    fontFamily: 'NunitoSans-Regular',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  searchMainDiv: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: wp('11%'),
  },
  orDivStyle: {
    width: wp('40%'),
    height: hp('0.5%'),
    backgroundColor: colors.FONT_COLOR,
    marginTop: wp('3.2%'),
    marginRight: wp('3%'),
  },
  orTextStyle: {
    color: colors.FONT_COLOR,
    fontSize: wp('3%'),
    fontFamily: 'NunitoSans-Regular',
    marginTop: hp('1%'),
  },
  secondOrDivStyle: {
    marginLeft: wp('2%'),
    marginTop: wp('3.2%'),
    width: wp('50%'),
    height: hp('0.5%'),
    backgroundColor: colors.FONT_COLOR,
  },
  vieMapTextStyle: {
    fontFamily: 'NunitoSans-Regular',
    justifyContent: 'center',
    marginLeft: wp('5%'),
    marginTop: wp('2.5%'),
    fontSize: hp('1.9%'),
    fontWeight: 'bold',
  },
  extraStyle: {
    width: wp('100%'),
    height: hp('1.5%'),
    backgroundColor: colors.FONT_COLOR,
    marginTop: wp('3.2%'),
    marginRight: wp('3%'),
  },
  homeTextStyle: {
    justifyContent: 'center',
    marginLeft: wp('5%'),
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Bold',
  },
  homeAddressTextStyle: {
    justifyContent: 'center',
    marginLeft: wp('5%'),
    marginRight: wp('10%'),
    marginTop: hp('0.8%'),
    fontSize: hp('1.8%'),
    fontFamily: 'NunitoSans-Light',
  },
  otherMainDivStyle: {
    marginLeft: wp('10%'),
    flexDirection: 'row',
    marginTop: wp('5%'),
    marginBottom: 100,
  },
  otherTextStyle: {
    justifyContent: 'center',
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    fontSize: hp('1.9%'),
    fontFamily: 'NunitoSans-Bold',
  },
  otherAddressTextStyle: {
    justifyContent: 'center',
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    marginTop: hp('0.8%'),
    fontSize: hp('1.8%'),
    fontFamily: 'NunitoSans-Light',
  },
});
