import React from 'react';
import {Paper, Autocomplete, Button, Grid, TextField} from '@material-ui/core';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SendIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Car} from './Car';

const LOCATIONS_FROM = [{label: 'Лесная поляна 34, п.8'}, {label: 'Эрмитаж'}];

const LOCATIONS_TO = [
  {label: 'Березовая роща 146, п.14', year: 1972},
  {label: 'Лесная поляна 34, п.8', year: 1994}
];

export const MapForm = () => (
  <form className="car form container--left w--400">
    <Paper style={{padding: '25px', marginBottom: '10px'}}>
      <Autocomplete
        options={LOCATIONS_FROM}
        id="from"
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
        options={LOCATIONS_TO}
        id="to"
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
      <Button id="order-button">Заказать</Button>
    </Paper>
  </form>
);
