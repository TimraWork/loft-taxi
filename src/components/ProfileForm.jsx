import {Button, Grid, Paper, TextField, Typography} from '@material-ui/core';
import React from 'react';
import PaymentCard from './PaymentCard';
import PropTypes from 'prop-types';

export const ProfileForm = ({handleFormSubmit, number, cardNumberOnChange, expiration, cardExpirationOnChange}) => (
  <div className="center_block bg--cover">
    <Paper className="text--center w--880" style={{padding: '70px'}}>
      <form className="form" onSubmit={handleFormSubmit}>
        <div align="center">
          <Typography variant="h1" align="center">
            Профиль
          </Typography>
          <Typography variant="subtitle1" align="center">
            Введите платежные данные
          </Typography>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="Имя владельца" name="name" placeholder="Loft" variant="standard" />
            <TextField
              variant="standard"
              label="Номер карты"
              name="number"
              value={number}
              onChange={cardNumberOnChange}
              inputProps={{maxLength: 22}}
              required
            />
            <Grid container spacing={3} className="mb--30">
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  label="MM/YY"
                  name="expiration"
                  value={expiration}
                  inputProps={{maxLength: 5}}
                  onChange={cardExpirationOnChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField variant="standard" label="CVC" name="cvc" inputProps={{maxLength: 3}} required />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <PaymentCard number={number} expiration={expiration} />
          </Grid>
        </Grid>
        <div align="center">
          <Button id="save-button" className="w--350">
            Сохранить
          </Button>
        </div>
      </form>
    </Paper>
  </div>
);

ProfileForm.propTypes = {
  handleFormSubmit: PropTypes.func
};
