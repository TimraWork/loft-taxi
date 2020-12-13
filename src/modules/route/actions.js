export const GET_ROUTE = 'GET_ROUTE';
export const SET_ROUTE = 'SET_ROUTE';

export const getRoute = (address1, address2) => ({type: GET_ROUTE, payload: {address1, address2}});
export const setRoute = (route) => ({type: SET_ROUTE, payload: {route}});
