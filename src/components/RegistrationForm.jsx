import React from 'react';
import {Paper, Box, Button, Typography, TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';

export const RegistrationForm = ({register}) => (
  <div className="center_block">
    <Paper style={{padding: '70px'}}>
      <form className="form w--350" onSubmit={register}>
        <Typography variant="h1" align="center">
          Регистрация
        </Typography>
        <TextField variant="standard" label="Email" name="email" inputProps={{type: 'email'}} required />
        <TextField variant="standard" label="Имя" name="name" required />
        <TextField variant="standard" label="Фамилия" name="surname" />
        <TextField
          variant="standard"
          label="Придумайте пароль"
          name="password"
          inputProps={{type: 'password'}}
          style={{marginBottom: '50px'}}
          required
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
