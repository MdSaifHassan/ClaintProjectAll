import {
  AUTH_LOGGED_IN,
  AUTH_CLEAR_LOGIN_ERROR_MESSAGE,
  AUTH_ERR_LOG_IN,
  AUTH_LOGGING_IN,
  AUTH_LOGOUT,
} from './logintype';
import {userService} from '../../../services/userService';
import {errorParser} from '../../services/apiErrorParser';
import {navigation} from '../../screens/ui/navgation/Route';

export const loggedIn = data => ({
  type: AUTH_LOGGED_IN,
  payload: data,
});

export const clearLoginErrorMessage = () => ({
  type: AUTH_CLEAR_LOGIN_ERROR_MESSAGE,
});

export const errorLogIn = errorMessage => ({
  type: AUTH_ERR_LOG_IN,
  payload: errorMessage,
});

export const loggingIn = () => ({
  type: AUTH_LOGGING_IN,
});

export const loggedOut = () => ({
  type: AUTH_LOGOUT,
});

export const login = mobile_no => dispatch => {
  dispatch(loggingIn());
  userService
    .login(mobile_no)
    .then(async res => {
      await dispatch(loggedIn(res.info));
      await navigation.navigate('OtpVerification');
    })
    .catch(err => {
      dispatch(errorLogIn(errorParser.parseLoginError(err).message));
    });
};
