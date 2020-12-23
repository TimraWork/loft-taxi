export const GET_PROFILE = 'GET_PROFILE';
export const SET_PROFILE = 'SET_PROFILE';
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const EDIT_PROFILE_FAILED = 'EDIT_PROFILE_FAILED';
export const REMOVE_PROFILE = 'REMOVE_PROFILE';

export const getProfile = (token) => ({type: GET_PROFILE, payload: {token}});
export const removeProfile = () => ({type: REMOVE_PROFILE});
export const setProfile = (profileData) => ({type: SET_PROFILE, payload: {profileData}});
export const editProfile = (token, cardNumber, expiryDate, cardName, cvc) => ({
  type: EDIT_PROFILE,
  payload: {token, cardNumber, expiryDate, cardName, cvc}
});
export const editProfileFailed = (error) => ({type: EDIT_PROFILE_FAILED, payload: {error}});
