export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOG_IN_FAILED = 'LOG_IN_FAILED';

// экшн криейтеры
export const logIn = (token) => ({type: LOG_IN, payload: {token}});
export const logInFailed = (error) => ({type: LOG_IN_FAILED, payload: {error}});
export const authenticate = (email, password) => ({type: AUTHENTICATE, payload: {email, password}});
export const logOut = () => ({type: LOG_OUT});

// import {createAction} from "redux-actions";
// export const saveProfile = createAction("loft-taxi/profile/save");
