import React from 'react';
import {Paper, Box, Button, Typography, TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';

export const LoginForm = ({authentificate}) => (
  <div className="center_block">
    <Paper style={{padding: '70px'}}>
      <form className="form w--350" onSubmit={authentificate}>
        <Typography variant="h1" align="center">
          Войти
        </Typography>
        <TextField variant="standard" label="Email" name="email" inputProps={{type: 'email'}} required />
        <TextField style={{marginBottom: '50px'}} variant="standard" label="Пароль" name="password" inputProps={{type: 'password'}} required />
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
