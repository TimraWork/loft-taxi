// import {takeLatest} from 'redux-saga/effects';
// import {profileSaga, handleGetProfileSaga} from '../modules/profile/sagas';
// import {GET_PROFILE} from '../modules/profile/actions';

import {recordSaga} from './recordSaga';
import {authenticate} from '../modules/auth/actions';
import {authSaga} from '../modules/auth/sagas';

// describe('profileSaga', () => {
//   it('calls handleGetProfileSaga if getProfile action is fired', () => {
//     const gen = profileSaga();
//     console.log(gen.next().value);
//     console.log('handleGetProfileSaga =', takeLatest(GET_PROFILE, handleGetProfileSaga));
//     // expect(gen.next().value).toEqual(takeLatest(getProfile, handleGetProfileSaga));
//   });
// });

describe('authSaga', () => {
  describe('#AUTHENTICATE', () => {
    it('authenticates through api', async () => {
      const dispatched = await recordSaga(authSaga, authenticate('test@test.ru', '123123'));
      expect(dispatched).toEqual([{type: 'AUTHENTICATE'}]);
    });
  });
});
