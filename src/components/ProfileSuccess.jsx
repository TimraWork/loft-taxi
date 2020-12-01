import {Button, Paper, Typography} from '@material-ui/core';
import React from 'react';

export const ProfileSuccess = () => (
  <Paper className="text--center w--880" style={{padding: '70px'}}>
    <Typography variant="h1" align="center">
      Профиль
    </Typography>
    <Typography variant="subtitle1" align="center">
      Платёжные данные обновлены. Теперь вы можете заказывать такси.
    </Typography>
    <Button className="w--350" href="/map/" data-testid="ok-button">
      Перейти на карту
    </Button>
  </Paper>
);
