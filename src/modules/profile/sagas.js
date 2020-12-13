import {takeLatest, call, put} from 'redux-saga/effects';
import {GET_PROFILE, SET_PROFILE, setProfile} from './actions';
import {getServerCard, serverCard} from '../../redux/api';

function* handleProfileSaga(action) {
  try {
    const profileData = yield call(getServerCard, action.payload);
    console.log('🚀 ~ file: sagas.js ~ line 8 ~ function*handleProfileSaga ~ profileData', profileData);
    if (profileData.success) {
      // yield put(setProfile(profileData));
    }
  } catch (e) {
    console.log(e);
  }
}

function* saveProfileSaga(action) {
  const profileData = yield call(serverCard, action.payload.authToken, ...Object.values(action.payload));
  console.log(profileData);
  if (profileData.success) {
    // localStorage.removeItem('state');
    // localStorage.setItem('state', JSON.stringify({auth: {loggedIn: true, token: action.payload.authToken, profile: action.payload}}));
    // yield put(logIn(action.payload.authToken, action.payload));
  }
}

export function* profileSaga() {
  yield takeLatest(GET_PROFILE, handleProfileSaga);
  yield takeLatest(SET_PROFILE, saveProfileSaga);
}
