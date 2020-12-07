import {Button, FormControl, Grid, Input, InputLabel, Paper, Typography} from '@material-ui/core';
import React, {useState} from 'react';
import PaymentCard from './PaymentCard';
import PropTypes from 'prop-types';

export const ProfileForm = ({handleFormSubmit}) => {
  const [number, setNumber] = useState('5545  2300  3432  4521');
  const [expiration, setExpiration] = useState('05/08');

  const validateNumbers = (inputValue) => inputValue.replace(/[^\d]/g, '');
  const validateWhiteSpace = (inputValue) => (inputValue.length > 3 ? inputValue.match(/.{1,4}/g).join('  ') : inputValue);

  const cardNumberOnchange = (e) => {
    let inputValue = e.target.value;

    inputValue = validateNumbers(inputValue);
    inputValue = validateWhiteSpace(inputValue);

    setNumber(inputValue);
  };

  const cardExpirationOnchange = (e) => {
    let inputExpValue = e.target.value;
    inputExpValue = validateNumbers(inputExpValue);
    setExpiration(inputExpValue);
  };

  return (
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
              <FormControl>
                <InputLabel htmlFor="name">Имя владельца</InputLabel>
                <Input id="name" name="name" placeholder="Loft" required />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="number">Номер карты</InputLabel>
                <Input
                  inputProps={{maxLength: 22}}
                  id="number"
                  name="number"
                  placeholder={number}
                  value={number}
                  onChange={cardNumberOnchange}
                  required
                />
              </FormControl>
              <Grid container spacing={3} className="mb--30">
                <Grid item xs={12} sm={6}>
                  <FormControl>
                    <InputLabel htmlFor="expiration">MM/YY</InputLabel>
                    <Input
                      inputProps={{maxLength: 5}}
                      id="expiration"
                      name="expiration"
                      placeholder={expiration}
                      value={expiration}
                      onChange={cardExpirationOnchange}
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl>
                    <InputLabel htmlFor="cvc">CVC</InputLabel>
                    <Input inputProps={{maxLength: 3}} id="cvc" name="cvc" placeholder="667" required />
                  </FormControl>
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
};

ProfileForm.propTypes = {
  handleFormSubmit: PropTypes.func
};
