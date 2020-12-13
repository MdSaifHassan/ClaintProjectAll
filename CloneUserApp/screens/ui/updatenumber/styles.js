import {StyleSheet} from 'react-native';
import colors from '../../../configs/color';

export const UpdataNumberScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 100,
  },
  imageLogoCon: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
    marginTop: 100,
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
  },
  commonTextBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  commonSubTextBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  socialbtn: {
    justifyContent: 'center',
    marginTop: 40,
    flexDirection: 'row',
  },
  submitButtonText: {
    color: colors.WHITE,
    fontSize: 17,
    fontFamily: 'NunitoSans-Regular',
  },
});
