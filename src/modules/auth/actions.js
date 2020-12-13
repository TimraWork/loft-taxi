export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';

// экшн криейтеры
export const logIn = (token) => ({type: LOG_IN, payload: {token}});
export const authenticate = (email, password) => ({type: AUTHENTICATE, payload: {email, password}});
export const logOut = () => ({type: LOG_OUT});

// import {createAction} from "redux-actions";
// export const saveProfile = createAction("loft-taxi/profile/save");
