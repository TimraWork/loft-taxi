import {takeEvery, call, put} from 'redux-saga/effects';
import {authenticate, logIn} from './actions';
import {serverLogin} from './api';

export function* Sagas() {
  yield takeEvery(authenticate, function* (action) {
    console.log(action);
    const data = yield call(serverLogin, ...Object.values(action.payload)); //
    if (data.success) {
      yield put(logIn(data.token));
    }
    console.log('result = ', data);
  });
} // главная сага, которая вызывает другие саги.
