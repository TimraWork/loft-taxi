import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {LoginForm} from '../components/LoginForm';
import {Alert} from '@material-ui/core';
import {logOut} from '../modules/auth';

export const Login = ({isLoggedIn, error, logOut}) => {
  useEffect(() => {
    logOut();
  }, [logOut]);

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
export const LoginWithAuth = connect(mapStateToProps, {logOut})(Login);
