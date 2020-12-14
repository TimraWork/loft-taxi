import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {authenticate} from '../modules/auth/actions';

import {LoginForm} from '../components/LoginForm';

export const Login = ({isLoggedIn, authenticate}) => {
  const authentificate = (e) => {
    e.preventDefault();
    const {email, password} = e.target;
    authenticate(email.value, password.value);
  };

  return <>{isLoggedIn ? <Redirect to="/map/" /> : <LoginForm authentificate={authentificate} />}</>;
};

export const LoginWithAuth = connect((state) => ({isLoggedIn: state.auth.isLoggedIn}), {authenticate})(Login);
