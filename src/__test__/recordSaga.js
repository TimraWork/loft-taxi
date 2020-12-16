import {runSaga} from 'redux-saga';

export const recordSaga = async (saga, initialAction = null) => {
  const dispatched = [];
  await runSaga(
    {
      dispatch: (action) => {
        console.log('🚀 ~ file: recordSaga.js ~ line 6 ~ await runSaga ~ action', action);
        return dispatched.push(action);
      }
    },
    saga,
    initialAction
  ).done;
  return dispatched;
};
