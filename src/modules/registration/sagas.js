import {takeLatest, call, put} from 'redux-saga/effects';
import {REGISTER} from './actions';
import {logIn} from '../../modules/auth/actions';
import {serverRegister} from '../../redux/api';

function* handleRegisterSaga(action) {
  try {
    const register = yield call(serverRegister, action.payload);
    if (register.success) {
      yield put(logIn(register.token, action.payload.email));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* registrationSaga() {
  yield takeLatest(REGISTER, handleRegisterSaga);
}
