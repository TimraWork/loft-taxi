import {LOG_IN, LOG_OUT, LOG_IN_FAILED, AUTHENTICATE} from './actions';

const initialState = {
  isLoggedIn: false,
  token: '',
  error: ''
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return {isLoggedIn: true, token: action.payload.token, error: ''};
    }
    case LOG_OUT: {
      return {isLoggedIn: false, token: '', error: ''};
    }
    case AUTHENTICATE: {
      return {isLoggedIn: false, token: '', error: ''};
    }
    case LOG_IN_FAILED: {
      return {isLoggedIn: false, token: '', error: action.payload.error};
    }
    default:
      return state;
  }
}
