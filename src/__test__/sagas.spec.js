import {recordSaga} from './recordSaga';
import {authenticate} from '../modules/auth/actions';
import {handleAuthorizationSaga, handleLogOutSaga} from '../modules/auth/sagas';

jest.mock('../redux/api', () => ({serverLogin: () => ({success: true, token: '123'}), getServerCard: () => {}}));

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
});
