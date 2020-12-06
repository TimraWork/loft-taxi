import React from 'react';
import {Paper, Box, Button, FormControl, Input, InputLabel, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

export const RegistrationForm = ({register}) => (
  <div className="center_block">
    <Paper style={{padding: '70px'}}>
      <form className="form w--350" onSubmit={register}>
        <Typography variant="h1" align="center">
          Регистрация
        </Typography>
        <FormControl>
          <InputLabel htmlFor="email">Email*</InputLabel>
          <Input id="email" name="email" type="email" placeholder="mail@mail.ru" required />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="name">Имя*</InputLabel>
          <Input id="name" name="name" type="text" placeholder="Петр" required />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="surname">Фамилия*</InputLabel>
          <Input id="surname" name="surname" type="text" placeholder="Фамилия" required />
        </FormControl>
        <FormControl style={{marginBottom: '50px'}}>
          <InputLabel htmlFor="password">Придумайте пароль*</InputLabel>
          <Input id="password" name="password" type="password" placeholder="*************" required />
        </FormControl>
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
