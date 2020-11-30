import React, {useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import {Box, Button, FormControl, Input, InputLabel, Link, Typography} from '@material-ui/core';
import {AuthContext, withAuth} from './hoc/AuthContext';

export const PageLogin = ({navigate}) => {
  const contextValue = useContext(AuthContext);

  const authentificate = (e) => {
    e.preventDefault();
    const {email, password} = e.target;
    contextValue.login(email.value, password.value);
  };

  const setNavigateTo = (e) => {
    e.preventDefault();
    navigate(e, '/profile/');
  };

  return (
    <>
      {contextValue.isLoggedIn ? (
        <div className="center_block">
          <Paper style={{padding: '70px'}}>
            <Typography variant="h1" align="center">
              Вы успешно авторизованы
            </Typography>
            <Button onClick={setNavigateTo}>На страницу профиля</Button>
          </Paper>
        </div>
      ) : (
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
              <FormControl>
                <InputLabel htmlFor="password">Пароль*</InputLabel>
                <Input id="password" name="password" type="password" placeholder="*************" required />
              </FormControl>
              <Box sx={{mb: 5, textAlign: 'right'}}>
                <Link href="#" color="secondary">
                  Забыли пароль?
                </Link>
              </Box>
              <Button id="login-button" className="mb--30">
                Войти
              </Button>
              <Box sx={{textAlign: 'center'}}>
                Новый пользователь?&nbsp;
                <Link id="registration-link" href="#" color="secondary">
                  Регистрация
                </Link>
              </Box>
            </form>
          </Paper>
        </div>
      )}
    </>
  );
};

export const PageLoginWithAuth = withAuth(PageLogin);
