import {Button, Paper, Typography} from '@material-ui/core';
import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

export const ProfileSuccess = () => (
  <Paper className="text--center w--880" style={{padding: '70px'}}>
    <Typography variant="h1" align="center">
      Профиль
    </Typography>
    <Typography variant="subtitle1" align="center" style={{margin: '-10px 0 30px'}}>
      Платёжные данные обновлены. Теперь вы можете заказывать такси.
    </Typography>
    <BrowserRouter>
      <Link to="/map/">
        <Button className="w--350" data-testid="ok-button">
          Перейти на карту
        </Button>
      </Link>
    </BrowserRouter>
  </Paper>
);
