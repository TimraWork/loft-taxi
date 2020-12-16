import React from 'react';
import {Paper, Box, Button, Typography, TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import {authenticate} from '../modules/auth/actions';
import {ErrorMessage} from '@hookform/error-message';

export const Form = ({authenticate}) => {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log('data = ', data);
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
            inputRef={register({
              required: 'This input is required.',
              pattern: {
                value: /\d+/,
                message: 'This input is number only.'
              },
              minLength: {
                value: 11,
                message: 'This input must exceed 10 characters'
              }
            })}
            variant="standard"
            label="Email"
            name="email"
            inputProps={{type: 'email'}}
            // required
          />
          <ErrorMessage
            name="multipleErrorInput"
            render={({messages}) => {
              console.log('messages', messages);
              return messages ? Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>) : null;
            }}
          />
          <TextField
            inputRef={register}
            style={{marginBottom: '50px'}}
            variant="standard"
            label="Пароль"
            name="password"
            inputProps={{type: 'password'}}
            // required
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
