export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const REGISTER = 'REGISTER';
export const PROFILE = 'PROFILE';
export const GET_PROFILE = 'GET_PROFILE';

// экшн криейтеры
export const logIn = (token, profile) => ({type: LOG_IN, payload: {token, profile}});
export const authenticate = (email, password) => ({type: AUTHENTICATE, payload: {email, password}});
export const logOut = () => ({type: LOG_OUT});
export const register = (name, surname, email, password) => ({type: REGISTER, payload: {name, surname, email, password}});
export const profile = (authToken, cardNumber, expiryDate, cardName, cvc) => ({
  type: PROFILE,
  payload: {authToken, cardNumber, expiryDate, cardName, cvc}
});
export const getProfile = (token, cardNumber, expiryDate, cardName, cvc) => ({
  type: GET_PROFILE,
  payload: {token, cardNumber, expiryDate, cardName, cvc}
});
