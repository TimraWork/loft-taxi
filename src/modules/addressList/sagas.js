import {takeLatest, call, put} from 'redux-saga/effects';
import {GET_ADDRESS_LIST, setAddressList} from './actions';
import {getServerAddressList} from '../../redux/api';

export function* handleAddressListSaga() {
  try {
    const addressList = yield call(getServerAddressList);
    if (addressList.addresses) {
      yield put(setAddressList(addressList.addresses));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* addressListSaga() {
  yield takeLatest(GET_ADDRESS_LIST, handleAddressListSaga);
}
