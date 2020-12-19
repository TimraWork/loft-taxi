import React from 'react';
import {Paper, Button, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

export const MapProfile = () => (
  <form className="car form container--left w--400">
    <Paper style={{padding: '25px', marginBottom: '10px'}}>
      <Typography variant="h1" align="center">
        Заполните платежные данные
      </Typography>
      <Typography variant="subtitle1" align="center" style={{margin: '-10px 0 30px'}}>
        Укажите информацию о банковской карте, чтобы сделать заказ.
      </Typography>
      <Link to="/profile/">
        <Button className="w--350" style={{marginBottom: '10px'}}>
          Перейти в профиль
        </Button>
      </Link>
    </Paper>
  </form>
);
