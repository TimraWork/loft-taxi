import {logIn, AUTHENTICATE, REGISTER, PROFILE} from './actions';
import {serverLogin, serverRegister, serverCard} from './api';

export const authMiddleware = (store) => (next) => async (action) => {
  console.log(action.type);
  switch (action.type) {
    case AUTHENTICATE: {
      const {email, password} = action.payload;
      const data = await serverLogin(email, password);

      if (data.success) {
        store.dispatch(logIn(data.token));
        localStorage.setItem('state', JSON.stringify({loggedIn: true, profile: {}}));
      }
      break;
    }
    case REGISTER: {
      const {name, surname, email, password} = action.payload;
      const data = await serverRegister(name, surname, email, password);

      if (data.success) {
        store.dispatch(logIn(data.token));
        localStorage.setItem('state', JSON.stringify({loggedIn: true, profile: {}}));
      }
      break;
    }
    case PROFILE: {
      const {token, cardNumber, expiryDate, cardName, cvc} = action.payload;
      const data = await serverCard(token, cardNumber, expiryDate, cardName, cvc);

      console.log('PROFILE FETCH success = ', data.success);
      if (data.success) {
        // store.dispatch(profile(token, cardNumber, expiryDate, cardName, cvc));
        localStorage.setItem(
          'state',
          JSON.stringify({
            loggedIn: true,
            profile: {
              cardNumber: cardNumber,
              expiryDate: expiryDate,
              cardName: cardName,
              cvc: cvc
            }
          })
        );
      }
      // console.log('Store getstate = ', store.getState());
      break;
    }
    default:
      return next(action);
  }
};
