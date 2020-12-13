import {combineReducers} from 'redux';
import auth from './auth';
import addressList from './addressList';
import route from './route';

export default combineReducers({auth, addressList, route});
