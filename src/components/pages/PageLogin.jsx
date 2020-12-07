import React, {useEffect} from 'react';
import {LoginForm} from '../LoginForm';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {authenticate, logOut} from '../../actions';

export const PageLogin = (props) => {
  // console.log('🚀 ~PageLogin ~ props', props);
  const {isLoggedIn, authenticate, logOut, location} = props;

  const authentificate = (e) => {
    e.preventDefault();
    const {email, password} = e.target;
    authenticate(email.value, password.value);
  };

  useEffect(() => {
    if (location.pathname === '/logout/') {
      logOut();
    }
  }, [logOut, location.pathname]);

  return <>{isLoggedIn ? <Redirect to="/map/" /> : <LoginForm authentificate={authentificate} />}</>;
};

export const PageLoginWithAuth = connect((state) => ({isLoggedIn: state.auth.isLoggedIn}), {authenticate, logOut})(PageLogin);
