import {SET_ADDRESS_LIST} from './actions';

// eslint-disable-next-line
export default function (state = [], action) {
  switch (action.type) {
    case SET_ADDRESS_LIST: {
      return action.payload.addressList;
    }
    default:
      return state;
  }
}
