import {SET_PROFILE} from './actions';

// eslint-disable-next-line
export default function (state = {}, action) {
  console.log('Reducers = ', action.payload);
  switch (action.type) {
    case SET_PROFILE: {
      return action.payload;
    }
    default:
      return state;
  }
}
