import {combineReducers} from 'redux';
import auth from './auth';
import addressList from './addressList';
import route from './route';
import profile from './profile';

export default combineReducers({auth, addressList, route, profile});
