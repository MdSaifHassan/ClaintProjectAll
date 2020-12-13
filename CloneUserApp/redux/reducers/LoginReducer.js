import { AUTH_LOGOUT, AUTH_CLEAR_LOGIN_ERROR_MESSAGE, AUTH_LOGGING_IN, AUTH_LOGGED_IN, AUTH_ERR_LOG_IN } from "../actions/logintype";

  const INITIAL_STATE = {
    user: null,
    token: null,
    loggingIn: false,
    errorMessage: '',
  };
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case AUTH_LOGOUT: {
        return {
          ...INITIAL_STATE,
        };
      }
      case AUTH_CLEAR_LOGIN_ERROR_MESSAGE: {
        return {
          ...state,
          errorMessage: '',
        };
      }
      case AUTH_LOGGING_IN:
        return {
          ...state,
          loggingIn: true,
        };
      case AUTH_LOGGED_IN:
        return {
          ...state,
          user: action.payload.info,
          loggingIn: false,
        };
      case AUTH_ERR_LOG_IN:
        return {
          ...state,
          loggingIn: false,
          errorMessage: action.payload,
        };
      default:
        return state;
    }
  }