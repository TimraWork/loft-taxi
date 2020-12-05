import React, {useEffect} from 'react';
import {Paper} from '@material-ui/core';
import {LoginForm} from '../LoginForm';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {authenticate, logOut} from '../../actions';

export const PageLogin = (props) => {
  const {isLoggedIn, authenticate, logOut, location} = props;
  console.log('🚀 ~ isLoggedIn', isLoggedIn);

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

  return (
    <div className="center_block">
      <Paper style={{padding: '70px'}}>{isLoggedIn ? <Redirect to="/map/" /> : <LoginForm authentificate={authentificate} />}</Paper>
    </div>
  );
};

export const PageLoginWithAuth = connect((state) => ({isLoggedIn: state.auth.isLoggedIn}), {authenticate, logOut})(PageLogin);
