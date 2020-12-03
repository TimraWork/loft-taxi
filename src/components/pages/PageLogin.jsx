import React, {useEffect} from 'react';
import {Paper} from '@material-ui/core';
import {withAuth} from '../hoc/AuthContext';
import {LoginForm} from '../LoginForm';
import {Redirect} from 'react-router-dom';

export const PageLogin = (props) => {
  const {isLoggedIn, login, logout, location} = props;
  const authentificate = (e) => {
    e.preventDefault();
    const {email, password} = e.target;
    login(email.value, password.value);
  };

  useEffect(() => {
    if (location.pathname === '/logout/') {
      logout();
    }
  }, [logout, location.pathname]);

  return (
    <div className="center_block">
      <Paper style={{padding: '70px'}}>{isLoggedIn ? <Redirect to="/map/" /> : <LoginForm authentificate={authentificate} />}</Paper>
    </div>
  );
};

export const PageLoginWithAuth = withAuth(PageLogin);
