import {takeLatest, call, put} from 'redux-saga/effects';
import {AUTHENTICATE, LOG_OUT, logIn, logInFailed} from './actions';
import {getProfile, removeProfile} from '../profile/actions';
import {removeRoute} from '../route/actions';
import {serverLogin, getServerCard} from '../../redux/api';

export function* handleAuthorizationSaga(action) {
  try {
    const authenticateData = yield call(serverLogin, action.payload);

    if (authenticateData.success) {
      yield call(getServerCard, authenticateData.token);
      yield put(getProfile(authenticateData.token));
      yield put(logIn(authenticateData.token));
    } else {
      yield put(logInFailed(authenticateData.error));
    }
  } catch (e) {
    yield put(logInFailed('Ошибка соединения с сервером. Проверьте параметры подключения к интернет.'));
  }
}

export function* handleLogOutSaga() {
  try {
    yield put(removeProfile());
    yield put(removeRoute());
  } catch (e) {
    console.log(e);
  }
}

export function* authSaga() {
  yield takeLatest(AUTHENTICATE, handleAuthorizationSaga);
  yield takeLatest(LOG_OUT, handleLogOutSaga);
}
