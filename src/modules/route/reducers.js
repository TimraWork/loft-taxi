import {SET_ROUTE} from './actions';

// eslint-disable-next-line
export default function (state = null, action) {
  switch (action.type) {
    case SET_ROUTE: {
      return action.payload.route;
    }
    default:
      return state;
  }
}
