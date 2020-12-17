import {recordSaga} from './recordSaga';

import {handleAuthorizationSaga, handleLogOutSaga, authenticate} from '../modules/auth';
import {handleAddressListSaga} from '../modules/addressList';
import {handleGetProfileSaga, handleEditProfileSaga, getProfile, editProfile, setProfile} from '../modules/profile';

jest.mock('../redux/api', () => ({
  serverLogin: () => ({success: true, token: '123'}),
  getServerCard: () => ({id: '123'}),
  getServerAddressList: () => ({addresses: []}),
  serverCard: () => ({success: true})
}));

describe('authSaga', () => {
  describe('#AUTHENTICATE', () => {
    it('authenticates through api', async () => {
      const dispatched = await recordSaga(handleAuthorizationSaga, authenticate('test@test.ru', '123123'));
      expect(dispatched).toEqual([
        {type: 'GET_PROFILE', payload: {token: '123'}},
        {type: 'LOG_IN', payload: {token: '123'}}
      ]);
    });
  });

  describe('#LOG_OUT', () => {
    it('removes data from store', async () => {
      const dispatched = await recordSaga(handleLogOutSaga);
      expect(dispatched).toEqual([{type: 'REMOVE_PROFILE'}, {type: 'REMOVE_ROUTE'}]);
    });
  });
});

describe('addressListSaga', () => {
  describe('#GET_ADDRESS_LIST', () => {
    it('get address list through api', async () => {
      const dispatched = await recordSaga(handleAddressListSaga);
      expect(dispatched).toEqual([{type: 'SET_ADDRESS_LIST', payload: {addressList: []}}]);
    });
  });
});

describe('profileSaga', () => {
  describe('#GET_PROFILE', () => {
    it('gets profile data through api', async () => {
      const dispatched = await recordSaga(handleGetProfileSaga, getProfile());
      expect(dispatched).toEqual([{type: 'SET_PROFILE', payload: {profileData: {}}}]);
    });
  });

  describe('#EDIT_PROFILE', () => {
    it('puts data to store', async () => {
      const dispatched = await recordSaga(handleEditProfileSaga, editProfile());
      expect(dispatched).toEqual([{type: 'SET_PROFILE', payload: {profileData: {}}}]);
    });
  });
});
