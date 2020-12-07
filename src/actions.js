export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const REGISTER = 'REGISTER';
export const PROFILE = 'PROFILE';

// экшн криейтеры
export const logIn = (token) => ({type: LOG_IN, payload: {token}});
export const logOut = () => ({type: LOG_OUT});
export const authenticate = (email, password) => ({type: AUTHENTICATE, payload: {email, password}});
export const register = (name, surname, email, password) => ({type: REGISTER, payload: {name, surname, email, password}});
export const profile = (token, cardNumber, expiryDate, cardName, cvc) => ({type: PROFILE, payload: {token, cardNumber, expiryDate, cardName, cvc}});
