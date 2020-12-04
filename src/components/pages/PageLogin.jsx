import React, {useEffect} from 'react';
import {Paper} from '@material-ui/core';
import {LoginForm} from '../LoginForm';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {logIn} from '../../actions';

export const PageLogin = (props) => {
  const {isLoggedIn, logIn, logout, location} = props;
  console.log('LOGIN - ', props);

  const authentificate = (e) => {
    e.preventDefault();
    const {email, password} = e.target;
    logIn(email.value, password.value);
  };

  useEffect(() => {
    if (location.pathname === '/logout/') {
      // logout();
    }
  }, [logout, location.pathname]);

  return (
    <div className="center_block">
      <Paper style={{padding: '70px'}}>{isLoggedIn ? <Redirect to="/map/" /> : <LoginForm authentificate={authentificate} />}</Paper>
    </div>
  );
};

export const PageLoginWithAuth = connect((state) => ({isLoggedIn: state.auth.isLoggedIn}), {logIn})(PageLogin);
