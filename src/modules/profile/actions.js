export const GET_PROFILE = 'GET_PROFILE';
export const SET_PROFILE = 'SET_PROFILE';
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const REMOVE_PROFILE = 'REMOVE_PROFILE';

// экшн криейтеры
export const getProfile = (token) => ({type: GET_PROFILE, payload: {token}});
export const setProfile = (profileData) => ({type: SET_PROFILE, payload: {profileData}});
export const removeProfile = () => ({type: REMOVE_PROFILE});
export const editProfile = (token, cardNumber, expiryDate, cardName, cvc) => ({
  type: EDIT_PROFILE,
  payload: {token, cardNumber, expiryDate, cardName, cvc},
});
