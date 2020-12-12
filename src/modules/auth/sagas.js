import {takeLatest, call, put} from 'redux-saga/effects';
import {AUTHENTICATE, logIn} from './actions';
import {serverLogin, getServerCard} from '../../redux/api';

function* handleAuthorizationSaga(action) {
  try {
    const authenticateData = yield call(serverLogin, action.payload);

    if (authenticateData.success) {
      const profileData = yield call(getServerCard, authenticateData.token);
      yield put(logIn(authenticateData.token, profileData));
      localStorage.removeItem('state');
      localStorage.setItem('state', JSON.stringify({auth: {loggedIn: true, token: authenticateData.token, profile: profileData}}));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* authSaga() {
  yield takeLatest(AUTHENTICATE, handleAuthorizationSaga);
} // главная сага, которая вызывает другие саги.
