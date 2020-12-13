import {LOG_IN, LOG_OUT} from './actions';

const initialState = {
  isLoggedIn: false,
  token: '',
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return {isLoggedIn: true, token: action.payload.token};
    }
    case LOG_OUT: {
      return {isLoggedIn: false, token: ''};
    }
    default:
      return state;
  }
}
