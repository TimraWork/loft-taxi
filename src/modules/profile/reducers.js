import {SET_PROFILE, REMOVE_PROFILE, EDIT_PROFILE_FAILED} from './actions';

// eslint-disable-next-line
export default function (state = null, action) {
  switch (action.type) {
    case SET_PROFILE: {
      return action.payload.profileData;
    }
    case REMOVE_PROFILE: {
      return null;
    }
    case EDIT_PROFILE_FAILED: {
      return {error: action.payload.error};
    }
    default:
      return state;
  }
}
