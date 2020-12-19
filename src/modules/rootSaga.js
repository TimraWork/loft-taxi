import {fork, all} from 'redux-saga/effects';

import {registrationSaga} from './registration';
import {authSaga} from './auth';
import {addressListSaga} from './addressList';
import {routeSaga} from './route';
import {profileSaga} from './profile';

export default function* rootSaga() {
  yield all([fork(registrationSaga), fork(authSaga), fork(addressListSaga), fork(routeSaga), fork(profileSaga)]);
}
