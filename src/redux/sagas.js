import {takeEvery, call, put} from 'redux-saga/effects';
import {AUTHENTICATE, logIn, PROFILE, REGISTER} from './actions';
import {serverLogin, getServerCard, serverCard, serverRegister} from './api';

export function* Sagas() {
  yield takeEvery(AUTHENTICATE, function* (action) {
    const authenticateData = yield call(serverLogin, ...Object.values(action.payload));

    if (authenticateData.success) {
      const profileData = yield call(getServerCard, authenticateData.token);

      yield put(logIn(authenticateData.token, profileData));
      localStorage.setItem('state', JSON.stringify({auth: {loggedIn: true, token: authenticateData.token, profile: profileData}}));
    }
  });

  yield takeEvery(PROFILE, function* (action) {
    const profileData = yield call(serverCard, action.payload.authToken, ...Object.values(action.payload));
    console.log('S =', profileData.success, action.payload);
    if (profileData.success) {
      localStorage.removeItem('state');
      localStorage.setItem('state', JSON.stringify({auth: {loggedIn: true, token: action.payload.authToken, profile: action.payload}}));
      yield put(logIn(action.payload.authToken, action.payload));
    }
  });

  yield takeEvery(REGISTER, function* (action) {
    const registerData = yield call(serverRegister, ...Object.values(action.payload));
    if (registerData.success) {
      localStorage.removeItem('state');
      localStorage.setItem('state', JSON.stringify({auth: {loggedIn: true, token: registerData.token, profile: action.payload}}));
      yield put(logIn(registerData.token, action.payload));
    }
  });
} // главная сага, которая вызывает другие саги.
