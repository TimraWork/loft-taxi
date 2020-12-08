import {LOG_IN, LOG_OUT, PROFILE} from '../redux/actions';

const initialState = {
  isLoggedIn: false,
  token: null,
  profile: {
    cardNumber: '',
    expiryDate: '',
    cardName: '',
    cvc: ''
  }
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return {...initialState, isLoggedIn: true, token: action.payload.token};
    }
    case LOG_OUT: {
      localStorage.removeItem('state');
      return {...initialState, isLoggedIn: false};
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
