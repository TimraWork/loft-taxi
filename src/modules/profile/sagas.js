import {takeLatest, call, put} from 'redux-saga/effects';
import {GET_PROFILE, EDIT_PROFILE, setProfile} from './actions';
import {getServerCard, serverCard} from '../../redux/api';

function* handleGetProfileSaga(action) {
  try {
    const profileData = yield call(getServerCard, action.payload.token);
    const {id, ...data} = profileData;
    if (profileData.id) {
      yield put(setProfile(data));
    }
  } catch (e) {
    console.log(e);
  }
}

function* handleEditProfileSaga(action) {
  const profileData = yield call(serverCard, action.payload);
  if (profileData.success) {
    yield put(setProfile(action.payload));
  }
}

export function* profileSaga() {
  yield takeLatest(GET_PROFILE, handleGetProfileSaga);
  yield takeLatest(EDIT_PROFILE, handleEditProfileSaga);
}
