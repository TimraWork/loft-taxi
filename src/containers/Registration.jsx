import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../modules/registration';

import {RegistrationForm} from '../components/RegistrationForm';

export const PageRegistration = ({isLoggedIn, register}) => {
  const registerUser = (e) => {
    e.preventDefault();
    const {name, surname, email, password} = e.target;
    register(email.value, password.value, name.value, surname.value);
  };

  return <>{isLoggedIn ? <Redirect to="/map/" /> : <RegistrationForm register={registerUser} />}</>;
};

export const RegistrationWithAuth = connect((state) => ({isLoggedIn: state.auth.isLoggedIn}), {register})(PageRegistration);
