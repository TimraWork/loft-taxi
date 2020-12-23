import {takeLatest, call, put} from 'redux-saga/effects';
import {REGISTER} from './actions';
import {logIn, logInFailed} from '../../modules/auth';
import {serverRegister} from '../../redux/api';
import {SERVER_ERROR_MESSAGE} from '../../utils/constants';

export function* handleRegisterSaga(action) {
  try {
    const register = yield call(serverRegister, action.payload);
    if (register.success) {
      yield put(logIn(register.token, action.payload.email));
    } else {
      yield put(logInFailed(register.error));
    }
  } catch (e) {
    yield put(logInFailed(SERVER_ERROR_MESSAGE));
  }
}

export function* registrationSaga() {
  yield takeLatest(REGISTER, handleRegisterSaga);
}
