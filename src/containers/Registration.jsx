import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../redux/actions';

import {RegistrationForm} from '../components/RegistrationForm';

export const PageRegistration = ({isLoggedIn, register}) => {
  const registerUser = (e) => {
    e.preventDefault();
    const {name, surname, email, password} = e.target;
    register(name.value, surname.value, email.value, password.value);
  };

  return <>{isLoggedIn ? <Redirect to="/profile/" /> : <RegistrationForm register={registerUser} />}</>;
};

export const RegistrationWithAuth = connect((state) => ({isLoggedIn: state.auth.isLoggedIn}), {register})(PageRegistration);
