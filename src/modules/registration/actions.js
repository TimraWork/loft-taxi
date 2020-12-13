export const REGISTER = 'REGISTER';

export const register = (email, password, name, surname) => ({type: REGISTER, payload: {email, password, name, surname}});
