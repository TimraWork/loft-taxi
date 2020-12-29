import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {LoginForm} from '../components/LoginForm';
import {Alert} from '@material-ui/core';
import {logOut, authenticate} from '../modules/auth';

import {useForm} from 'react-hook-form';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().email('Электронная почта должна иметь правильный формат').required('Email - обязательное поле'),
  password: yup.string().required('Пароль - обязательное поле')
});

const Login = ({isLoggedIn, error, logOut, authenticate}) => {
  useEffect(() => {
    logOut();
  }, [logOut]);

  const {register, handleSubmit, errors, formState} = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    const {email, password} = data;
    authenticate(email, password);
  };

  return (
    <>
      {isLoggedIn ? (
        <Redirect to="/map/" />
      ) : (
        <LoginForm
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
export const LoginWithAuth = connect(mapStateToProps, {logOut, authenticate})(Login);
