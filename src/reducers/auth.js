import {LOG_IN, LOG_OUT, PROFILE, GET_PROFILE} from '../redux/actions';

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
    case GET_PROFILE: {
      return {
        isLoggedIn: true,
        token: action.payload.token,
        profile: action.payload,
      };
    }
    case PROFILE: {
      return {
        isLoggedIn: true,
        token: action.payload.id,
        profile: {
          cardNumber: action.payload.cardNumber,
          expiryDate: action.payload.expiryDate,
          cardName: action.payload.cardName,
          cvc: action.payload.cvc,
        },
      };
    }
    default:
      return state;
  }
}
