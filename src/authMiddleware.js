import {logIn, profile, AUTHENTICATE, REGISTER, PROFILE} from './actions';
import {serverLogin, serverRegister, serverCard} from './api';

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    const data = await serverLogin(email, password);

    if (data.success) {
      store.dispatch(logIn(data.token));

      localStorage.setItem('state', JSON.stringify({loggedIn: true, profile: {}}));
    }
  } else if (action.type === REGISTER) {
    const {name, surname, email, password} = action.payload;
    const data = await serverRegister(name, surname, email, password);

    if (data.success) {
      store.dispatch(logIn());
      localStorage.setItem('state', JSON.stringify({loggedIn: true, profile: {}}));
    }
  } else if (action.type === PROFILE) {
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
            cvc: cvc,
          },
        })
      );

      console.log('Store getstate = ', store.getState());
    }
  } else {
    next(action);
  }
};
