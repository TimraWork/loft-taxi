import {combineReducers} from 'redux';
import auth from './auth';
import addressList from './addressList';

export default combineReducers({auth, addressList});
