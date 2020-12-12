import {LOG_IN, LOG_OUT} from './actions';

const initialState = {
  isLoggedIn: false,
  token: '',
  profile: {},
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return {isLoggedIn: true, token: action.payload.token, profile: action.payload.profile};
    }
    case LOG_OUT: {
      localStorage.removeItem('state');
      return {isLoggedIn: false, token: '', profile: {}};
    }
    default:
      return state;
  }
}
