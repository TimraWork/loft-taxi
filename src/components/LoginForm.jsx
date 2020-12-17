import React from 'react';
import {Paper, Box, Button, Typography, TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import {authenticate} from '../modules/auth/actions';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().email('Электронная почта должна иметь правильный формат').required('Email - обязательное поле'),
  password: yup.string().required('Пароль - обязательное поле')
});

export const Form = ({authenticate}) => {
  const {register, handleSubmit, errors} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    const {email, password} = data;
    authenticate(email, password);
  };

  return (
    <div className="center_block">
      <Paper style={{padding: '70px'}}>
        <form className="form w--350" onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h1" align="center">
            Войти
          </Typography>
          <TextField
            inputRef={register}
            variant="standard"
            label="Email"
            name="email"
            inputProps={{type: 'email'}}
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
          <TextField
            inputRef={register}
            style={{marginBottom: '50px'}}
            variant="standard"
            label="Пароль"
            name="password"
            inputProps={{type: 'password'}}
            error={!!errors.password}
            helperText={errors?.password?.message}
          />
          <Button id="login-button" className="mb--30">
            Войти
          </Button>
          <Box sx={{textAlign: 'center'}}>
            Новый пользователь?&nbsp;
            <Link to="/registration/" id="registration-link" href="#" color="secondary">
              Регистрация
            </Link>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export const LoginForm = connect(null, {authenticate})(Form);
