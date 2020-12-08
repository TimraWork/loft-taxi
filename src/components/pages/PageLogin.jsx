import React from 'react';
import {LoginForm} from '../LoginForm';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {authenticate, logOut} from '../../actions';

export const PageLogin = ({isLoggedIn, authenticate}) => {
  const authentificate = (e) => {
    e.preventDefault();
    const {email, password} = e.target;
    authenticate(email.value, password.value);
  };

  return <>{isLoggedIn ? <Redirect to="/map/" /> : <LoginForm authentificate={authentificate} />}</>;
};

export const PageLoginWithAuth = connect((state) => ({isLoggedIn: state.auth.isLoggedIn}), {authenticate, logOut})(PageLogin);
