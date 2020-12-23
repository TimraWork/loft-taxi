import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {RegistrationForm} from '../components/RegistrationForm';
import {Alert} from '@material-ui/core';
import {logOut} from '../modules/auth';
import {register} from '../modules/registration';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import {useForm} from 'react-hook-form';

const schema = yup.object().shape({
  email: yup.string().email('Электронная почта должна иметь правильный формат').required('Email - обязательное поле'),
  password: yup.string().required('Пароль - обязательное поле'),
  name: yup.string().required('Имя - обязательное поле'),
  surname: yup.string().required('Фамилия - обязательное поле')
});

const Registration = ({isLoggedIn, error, logOut, register: registerUser}) => {
  useEffect(() => {
    logOut();
  }, [logOut]);

  const {register, handleSubmit, errors, formState} = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    const {name, surname, email, password} = data;
    registerUser(email, password, name, surname);
  };

  return (
    <>
      {isLoggedIn ? (
        <Redirect to="/map/" />
      ) : (
        <RegistrationForm
          errors={errors}
          register={register}
          formState={formState}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
        />
      )}
      {error && (
        <Alert className="server_error" severity="error">
          {error}
        </Alert>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({isLoggedIn: state.auth.isLoggedIn, error: state.auth.error});
export const RegistrationWithAuth = connect(mapStateToProps, {logOut, register})(Registration);
