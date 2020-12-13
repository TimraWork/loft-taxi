import {takeLatest, call, put} from 'redux-saga/effects';
import {GET_PROFILE, EDIT_PROFILE, setProfile} from './actions';
import {getServerCard, serverCard} from '../../redux/api';

function* handleGetProfileSaga(action) {
  try {
    const profileData = yield call(getServerCard, action.payload.token);
    console.log('🚀  profileData', profileData);
    if (profileData.id) {
      yield put(setProfile(profileData));
    }
  } catch (e) {
    console.log(e);
  }
}

function* handleEditProfileSaga(action) {
  console.log('handleSetProfileSaga action.payload = ', action.payload);
  const profileData = yield call(serverCard, action.payload.authToken, ...Object.values(action.payload));
  if (profileData.success) {
    console.log('profileSu');
    // localStorage.removeItem('state');
    // localStorage.setItem('state', JSON.stringify({auth: {loggedIn: true, token: action.payload.authToken, profile: action.payload}}));
    // yield put(logIn(action.payload.authToken, action.payload));
  }
}

export function* profileSaga() {
  yield takeLatest(GET_PROFILE, handleGetProfileSaga);
  yield takeLatest(EDIT_PROFILE, handleEditProfileSaga);
}
