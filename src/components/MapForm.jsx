import React from 'react';
import {Paper, Autocomplete, Button, Grid, TextField} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SendIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

import {Car} from './Car';

export const MapForm = ({
  locationsFrom,
  locationsTo,
  locationFrom,
  locationTo,
  handleLocationFromOnChange,
  handleLocationToOnChange,
  handleOrderOnClick
}) => (
  <form className="car form container--left w--400">
    <Paper style={{padding: '25px', marginBottom: '10px'}}>
      <Autocomplete
        options={locationsFrom || []}
        onChange={handleLocationFromOnChange}
        autoHighlight={true}
        noOptionsText={'Выберите значение из списка'}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Откуда"
            variant="standard"
            name="from"
            InputProps={{
              ...params.InputProps,
              startAdornment: <FiberManualRecordIcon fontSize="small" />
            }}
          />
        )}
        popupIcon={<ExpandMoreIcon />}
      />
      <Autocomplete
        options={locationsTo || []}
        onChange={handleLocationToOnChange}
        autoHighlight={true}
        noOptionsText={'Выберите значение из списка'}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Куда"
            variant="standard"
            name="to"
            InputProps={{
              ...params.InputProps,
              startAdornment: <SendIcon fontSize="small" color="secondary" />
            }}
          />
        )}
        popupIcon={<ExpandMoreIcon />}
      />
    </Paper>
    <Paper style={{padding: '25px', marginTop: '-25px'}}>
      <Grid container spacing={2} style={{marginBottom: '20px'}}>
        <Car price={150} name="Стандарт" type="standard" />
        <Car price={250} name="Премиум" type="premium" />
        <Car price={350} name="Бизнес" type="business" />
      </Grid>
      <Button id="order-button" onClick={handleOrderOnClick} disabled={!locationFrom || !locationTo}>
        Заказать
      </Button>
    </Paper>
  </form>
);

Car.propTypes = {
  locationsFrom: PropTypes.array,
  locationsTo: PropTypes.array,
  locationFrom: PropTypes.string,
  locationTo: PropTypes.string,
  handleLocationFromOnChange: PropTypes.func,
  handleLocationToOnChange: PropTypes.func,
  handleOrderOnClick: PropTypes.func
};
