export const GET_ADDRESS_LIST = 'GET_ADDRESS_LIST';
export const SET_ADDRESS_LIST = 'SET_ADDRESS_LIST';

export const getAddressList = () => ({type: GET_ADDRESS_LIST});
export const setAddressList = (addressList) => ({type: SET_ADDRESS_LIST, payload: {addressList}});
