export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const REGISTER = 'REGISTER';

// экшн криейтеры
export const logIn = (token, profile) => ({type: LOG_IN, payload: {token, profile}});
export const authenticate = (email, password) => ({type: AUTHENTICATE, payload: {email, password}});
export const logOut = () => ({type: LOG_OUT});

// import {createAction} from "redux-actions";
// export const saveProfile = createAction("loft-taxi/profile/save");
