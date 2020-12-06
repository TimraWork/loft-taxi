import {logIn, AUTHENTICATE, REGISTER} from './actions';
import {serverLogin, serverRegister} from './api';

export const authMiddleware = (store) => (next) => async (action) => {
  console.log('action.type = ', action.type);
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    const success = await serverLogin(email, password);
    if (success) {
      store.dispatch(logIn());
    }
  } else if (action.type === REGISTER) {
    const {name, surname, email, password} = action.payload;
    const success = await serverRegister(name, surname, email, password);

    if (success) {
      store.dispatch(logIn());
    }
  } else {
    next(action);
  }
};
