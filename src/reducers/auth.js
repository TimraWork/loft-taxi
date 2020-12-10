import {LOG_IN, LOG_OUT, PROFILE, GET_PROFILE} from '../redux/actions';

const initialState = {
  isLoggedIn: false,
  token: null,
  profile: {}
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return {...initialState, isLoggedIn: true, token: action.payload.token, profile: action.payload.profile};
    }
    case LOG_OUT: {
      localStorage.removeItem('state');
      return {...initialState, isLoggedIn: false};
    }
    case GET_PROFILE: {
      return {
        isLoggedIn: true,
        token: action.payload.token,
        profile: {
          cardNumber: action.payload.cardNumber,
          expiryDate: action.payload.expiryDate,
          cardName: action.payload.cardName,
          cvc: action.payload.cvc,
          token: action.payload.token
        }
      };
    }
    case PROFILE: {
      return {
        isLoggedIn: true,
        token: action.payload.token,
        profile: {
          cardNumber: action.payload.cardNumber,
          expiryDate: action.payload.expiryDate,
          cardName: action.payload.cardName,
          cvc: action.payload.cvc
        }
      };
    }
    default:
      return state;
  }
}
