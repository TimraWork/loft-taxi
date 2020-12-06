import React from 'react';
import {Paper, Box, Button, FormControl, Input, InputLabel, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

export const LoginForm = ({authentificate}) => (
  <div className="center_block">
    <Paper style={{padding: '70px'}}>
      <form className="form w--350" onSubmit={authentificate}>
        <Typography variant="h1" align="center">
          Войти
        </Typography>
        <FormControl>
          <InputLabel htmlFor="email">Email*</InputLabel>
          <Input id="email" name="email" type="email" placeholder="mail@mail.ru" required />
        </FormControl>
        <FormControl style={{marginBottom: '50px'}}>
          <InputLabel htmlFor="password">Пароль*</InputLabel>
          <Input id="password" name="password" type="password" placeholder="*************" required />
        </FormControl>
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
