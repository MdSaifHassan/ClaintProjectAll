import colors from '../../../configs/color';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  // maincontainer: {
  //   flex: 1,
  //   backgroundColor: 'white',
  // },

  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageLogoCon: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    //flex: 1,
    justifyContent: 'center',
  },
  container: {
    marginTop: 100,
    //backgroundColor: 'red',
    padding: 16,
    flex: 1,
  },
  submitButtonText: {
    color: colors.WHITE,
    fontSize: 17,
    fontFamily: 'NunitoSans-Regular',
  },
  otpResendButton: {
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
  },
  otpResendButtonText: {
    color: colors.FONT_COLOR,
    textTransform: 'none',
    textDecorationLine: 'underline',
  },
  otpText: {
    color: colors.FONT_COLOR,
    fontSize: 18,
    width: '100%',
    fontWeight: 'bold',
  },
});
