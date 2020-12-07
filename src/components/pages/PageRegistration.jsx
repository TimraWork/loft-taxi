import React from 'react';
import {RegistrationForm} from '../RegistrationForm';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {register} from '../../actions';

export const PageRegistration = (props) => {
  // console.log('🚀 ~PageRegis ~ props', props);

  const {isLoggedIn, register} = props;

  const registerUser = (e) => {
    e.preventDefault();
    const {name, surname, email, password} = e.target;
    register(name.value, surname.value, email.value, password.value);
  };

  return <>{isLoggedIn ? <Redirect to="/map/" /> : <RegistrationForm register={registerUser} />}</>;
};

export const PageRegistrationWithAuth = connect((state) => ({isLoggedIn: state.auth.isLoggedIn}), {register})(PageRegistration);
