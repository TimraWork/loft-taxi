export const REGISTER = 'REGISTER';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const register = (email, password, name, surname) => ({type: REGISTER, payload: {email, password, name, surname}});
