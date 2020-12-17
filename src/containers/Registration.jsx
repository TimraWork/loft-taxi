import React from 'react';
import {Redirect} from 'react-router-dom';

import {RegistrationForm} from '../components/RegistrationForm';

export const RegistrationWithAuth = ({isLoggedIn}) => {
  return <>{isLoggedIn ? <Redirect to="/map/" /> : <RegistrationForm />}</>;
};
