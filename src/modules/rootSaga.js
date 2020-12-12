import {fork, all} from 'redux-saga/effects';

import {authSaga} from './auth';
import {addressListSaga} from './addressList';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(addressListSaga)]);
}
