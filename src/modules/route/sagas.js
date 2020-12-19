import {takeLatest, call, put} from 'redux-saga/effects';
import {GET_ROUTE, setRoute} from './actions';
import {getServerRoute} from '../../redux/api';

export function* handleRouteSaga(action) {
  try {
    const addressList = yield call(getServerRoute, action.payload);
    if (addressList) {
      yield put(setRoute(addressList));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* routeSaga() {
  yield takeLatest(GET_ROUTE, handleRouteSaga);
}
