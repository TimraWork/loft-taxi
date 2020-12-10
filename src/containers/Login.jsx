import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {authenticate, logOut} from '../redux/actions';

import {LoginForm} from '../components/LoginForm';
import {store} from '../redux/store';

export const PageLogin = ({isLoggedIn, authenticate}) => {
  const authentificate = (e) => {
    e.preventDefault();
    const {email, password} = e.target;
    authenticate(email.value, password.value);
  };

  console.log('Store getstate = ', store.getState().auth);
  console.log('localstorage = ', localStorage.getItem('state'));

  return <>{isLoggedIn ? <Redirect to="/map/" /> : <LoginForm authentificate={authentificate} />}</>;
};

export const LoginWithAuth = connect((state) => ({isLoggedIn: state.auth.isLoggedIn}), {authenticate, logOut})(PageLogin);
