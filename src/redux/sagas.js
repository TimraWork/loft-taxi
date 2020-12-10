import {takeEvery, call, put} from 'redux-saga/effects';
import {AUTHENTICATE, logIn} from './actions';
import {serverLogin, getServerCard} from './api';

export function* Sagas() {
  yield takeEvery(AUTHENTICATE, function* (action) {
    const authenticateData = yield call(serverLogin, ...Object.values(action.payload));
    if (authenticateData.success) {
      const profileData = yield call(getServerCard, authenticateData.token);
      yield put(logIn(authenticateData.token, profileData));
      localStorage.setItem('state', JSON.stringify({auth: {loggedIn: true, profile: profileData}}));
    }
  });
} // главная сага, которая вызывает другие саги.
