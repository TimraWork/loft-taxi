import React from 'react';
import {Paper, Box, Button, Typography, TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {register} from '../modules/registration';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import {useForm} from 'react-hook-form';

const schema = yup.object().shape({
  email: yup.string().email('Электронная почта должна иметь правильный формат').required('Email - обязательное поле'),
  password: yup.string().required('Пароль - обязательное поле'),
  name: yup.string().required('Имя - обязательное поле')
});

const Form = ({register: registerUser}) => {
  const {register, handleSubmit, errors} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    const {name, surname, email, password} = data;
    registerUser(email, password, name, surname);
  };

  return (
    <div className="center_block">
      <Paper style={{padding: '70px'}}>
        <form className="form w--350" onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h1" align="center">
            Регистрация
          </Typography>
          <TextField
            variant="standard"
            label="Email *"
            name="email"
            inputProps={{type: 'text'}}
            inputRef={register}
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
          <TextField variant="standard" label="Имя *" name="name" inputRef={register} error={!!errors.name} helperText={errors?.name?.message} />
          <TextField variant="standard" label="Фамилия" name="surname" />
          <TextField
            style={{marginBottom: '50px'}}
            variant="standard"
            label="Придумайте пароль *"
            name="password"
            inputProps={{type: 'password'}}
            inputRef={register}
            error={!!errors.password}
            helperText={errors?.password?.message}
          />
          <Button id="login-button" className="mb--30">
            Зарегистрироваться
          </Button>
          <Box sx={{textAlign: 'center'}}>
            Уже зарегистрированы?&nbsp;
            <Link to="/login/" id="login-link" href="#" color="secondary">
              Войти
            </Link>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export const RegistrationForm = connect(null, {register})(Form);
