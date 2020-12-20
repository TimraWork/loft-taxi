import {SET_PROFILE, REMOVE_PROFILE, EDIT_PROFILE_FAILED} from './actions';

// eslint-disable-next-line
export default function (state = {}, action) {
  switch (action.type) {
    case SET_PROFILE: {
      return action.payload.profileData;
    }
    case REMOVE_PROFILE: {
      return {};
    }
    case EDIT_PROFILE_FAILED: {
      return {error: action.payload.error};
    }
    default:
      return state;
  }
}
