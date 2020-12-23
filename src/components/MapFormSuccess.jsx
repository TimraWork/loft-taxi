import {Button, Paper, Typography} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

export const MapFormSuccess = ({handleNewOrderClick}) => (
  <Paper className="text--center w--400 container--left" style={{padding: '30px'}}>
    <Typography variant="h1" align="center">
      Заказ размещен
    </Typography>
    <Typography variant="subtitle1" align="center" style={{margin: '-10px 0 20px'}}>
      Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
    </Typography>
    <Button className="w--350" data-testid="ok-button" onClick={handleNewOrderClick}>
      Сделать новый заказ
    </Button>
  </Paper>
);

MapFormSuccess.propTypes = {
  handleNewOrderClick: PropTypes.func
};
