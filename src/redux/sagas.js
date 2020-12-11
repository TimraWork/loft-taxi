import {takeEvery, call, put} from 'redux-saga/effects';
import {AUTHENTICATE, logIn, PROFILE, REGISTER} from './actions';
import {serverLogin, getServerCard, serverCard, serverRegister} from './api';

function* registrationSaga(action) {
  const registerData = yield call(serverRegister, ...Object.values(action.payload));
  if (registerData.success) {
    localStorage.removeItem('state').setItem('state', JSON.stringify({auth: {loggedIn: true, token: registerData.token, profile: action.payload}}));
    yield put(logIn(registerData.token, action.payload));
  }
}

function* authorizationSaga(action) {
  const authenticateData = yield call(serverLogin, ...Object.values(action.payload));
  if (authenticateData.success) {
    const profileData = yield call(getServerCard, authenticateData.token);
    yield put(logIn(authenticateData.token, profileData));
    localStorage.setItem('state', JSON.stringify({auth: {loggedIn: true, token: authenticateData.token, profile: profileData}}));
  }
}

function* saveProfileSaga(action) {
  const profileData = yield call(serverCard, action.payload.authToken, ...Object.values(action.payload));
  if (profileData.success) {
    localStorage
      .removeItem('state')
      .setItem('state', JSON.stringify({auth: {loggedIn: true, token: action.payload.authToken, profile: action.payload}}));
    yield put(logIn(action.payload.authToken, action.payload));
  }
}

export function* Sagas() {
  yield takeEvery(REGISTER, registrationSaga);
  yield takeEvery(AUTHENTICATE, authorizationSaga);
  yield takeEvery(PROFILE, saveProfileSaga);
} // главная сага, которая вызывает другие саги.
