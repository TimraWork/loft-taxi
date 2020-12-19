import {SET_PROFILE, REMOVE_PROFILE} from './actions';

// eslint-disable-next-line
export default function (state = {}, action) {
  switch (action.type) {
    case SET_PROFILE: {
      return action.payload.profileData;
    }
    case REMOVE_PROFILE: {
      return {};
    }
    default:
      return state;
  }
}
