export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const REGISTER = 'REGISTER';

// экшн криейтеры
export const logIn = () => ({type: LOG_IN});
export const logOut = () => ({type: LOG_OUT});
export const authenticate = (email, password) => ({type: AUTHENTICATE, payload: {email, password}});
export const register = (name, surname, email, password) => ({type: REGISTER, payload: {name, surname, email, password}});
