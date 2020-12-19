import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {LoginForm} from '../components/LoginForm';

export const Login = ({isLoggedIn}) => {
  return <>{isLoggedIn ? <Redirect to="/map/" /> : <LoginForm />}</>;
};

export const LoginWithAuth = connect((state) => ({isLoggedIn: state.auth.isLoggedIn}))(Login);
