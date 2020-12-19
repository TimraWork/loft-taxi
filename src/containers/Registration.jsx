import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {RegistrationForm} from '../components/RegistrationForm';
import {Alert} from '@material-ui/core';
import {logOut} from '../modules/auth';

const Registration = ({isLoggedIn, error, logOut}) => {
  useEffect(() => {
    logOut();
  }, [logOut]);

  return (
    <>
      {isLoggedIn ? <Redirect to="/map/" /> : <RegistrationForm />}
      {error && (
        <Alert className="server_error" severity="error">
          {error}
        </Alert>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({isLoggedIn: state.auth.isLoggedIn, error: state.auth.error});
export const RegistrationWithAuth = connect(mapStateToProps, {logOut})(Registration);
