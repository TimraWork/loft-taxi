import {takeLatest, call, put} from 'redux-saga/effects';
import {GET_PROFILE, EDIT_PROFILE, setProfile, editProfileFailed} from './actions';
import {getServerCard, serverCard} from '../../redux/api';
import {SERVER_ERROR_MESSAGE} from '../../utils/constants';

export function* handleGetProfileSaga(action) {
  try {
    const profileData = yield call(getServerCard, action.payload.token);
    const {id, ...data} = profileData;
    if (profileData.id) {
      yield put(setProfile(data));
    } else {
      yield put(editProfileFailed(profileData.error));
    }
  } catch (e) {
    yield put(editProfileFailed(SERVER_ERROR_MESSAGE));
  }
}

export function* handleEditProfileSaga(action) {
  try {
    const profileData = yield call(serverCard, action.payload);
    if (profileData.success) {
      yield put(setProfile(action.payload));
    } else {
      yield put(editProfileFailed(profileData.error));
    }
  } catch (e) {
    yield put(editProfileFailed(SERVER_ERROR_MESSAGE));
  }
}

export function* profileSaga() {
  yield takeLatest(GET_PROFILE, handleGetProfileSaga);
  yield takeLatest(EDIT_PROFILE, handleEditProfileSaga);
}
