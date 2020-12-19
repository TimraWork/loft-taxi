import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {LoginForm} from '../components/LoginForm';
import {Alert} from '@material-ui/core';

export const Login = ({isLoggedIn, error}) => {
  return (
    <>
      {isLoggedIn ? <Redirect to="/map/" /> : <LoginForm />}
      {error && (
        <Alert className="server_error" severity="error">
          {error}
        </Alert>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({isLoggedIn: state.auth.isLoggedIn, error: state.auth.error});

export const LoginWithAuth = connect(mapStateToProps)(Login);
