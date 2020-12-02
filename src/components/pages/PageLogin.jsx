import React, {useContext} from 'react';
import {Paper, Button, Typography} from '@material-ui/core';
import {AuthContext, withAuth} from '../hoc/AuthContext';
import {LoginForm} from '../LoginForm';
import {NavLink} from 'react-router-dom';

export const PageLogin = ({navigate}) => {
  const contextValue = useContext(AuthContext);

  const authentificate = (e) => {
    e.preventDefault();
    const {email, password} = e.target;
    contextValue.login(email.value, password.value);
  };

  return (
    <div className="center_block">
      <Paper style={{padding: '70px'}}>
        {contextValue.isLoggedIn ? (
          <>
            <Typography variant="h1" align="center">
              Вы успешно авторизованы
            </Typography>
            <Button component={NavLink} to="/profile/">
              На страницу профиля
            </Button>
          </>
        ) : (
          <LoginForm authentificate={authentificate} />
        )}
      </Paper>
    </div>
  );
};

export const PageLoginWithAuth = withAuth(PageLogin);
