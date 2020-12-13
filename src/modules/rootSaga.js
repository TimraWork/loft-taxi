import {fork, all} from 'redux-saga/effects';

import {authSaga} from './auth';
import {addressListSaga} from './addressList';
import {routeSaga} from './route';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(addressListSaga), fork(routeSaga)]);
}
