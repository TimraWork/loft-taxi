export const GET_PROFILE = 'GET_PROFILE';
export const SET_PROFILE = 'SET_PROFILE';

// экшн криейтеры
export const getProfile = (token) => ({type: GET_PROFILE, payload: {token}});
export const setProfile = (token, number, expiration, name, cvcValue) => ({type: SET_PROFILE, payload: {token, number, expiration, name, cvcValue}});
