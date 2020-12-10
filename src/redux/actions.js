export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const REGISTER = 'REGISTER';
export const PROFILE = 'PROFILE';
export const GET_PROFILE = 'GET_PROFILE';
export const ACTIVATE_STORE = 'ACTIVATE_STORE';

// экшн криейтеры
export const logIn = (token, profile) => ({type: LOG_IN, payload: {token, profile}});
export const logOut = () => ({type: LOG_OUT});
export const authenticate = (email, password) => ({type: AUTHENTICATE, payload: {email, password}});
export const register = (name, surname, email, password) => ({type: REGISTER, payload: {name, surname, email, password}});
export const profile = (token, cardNumber, expiryDate, cardName, cvc) => ({type: PROFILE, payload: {token, cardNumber, expiryDate, cardName, cvc}});
export const getProfile = (token, cardNumber, expiryDate, cardName, cvc) => ({
  type: GET_PROFILE,
  payload: {token, cardNumber, expiryDate, cardName, cvc}
});
export const activateStore = (token, profile) => ({
  type: ACTIVATE_STORE,
  payload: {token, profile}
});
