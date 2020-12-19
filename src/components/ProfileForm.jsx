import {Button, Grid, Paper, TextField, Typography} from '@material-ui/core';
import React from 'react';
import {PaymentCard} from './PaymentCard';
import PropTypes from 'prop-types';

import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, DatePicker} from '@material-ui/pickers';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import {useForm} from 'react-hook-form';

import moment from 'moment';

const setMinMax = (countSymbols) => {
  const message = `Должно быть ровно ${countSymbols} символа`;
  return {countSymbols, message};
};

const schema = yup.object().shape({
  name: yup.string(),
  number: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(...Object.values(setMinMax(22))),
  cvc: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(...Object.values(setMinMax(3)))
});

export const ProfileForm = ({number, expiration, name, cvc, cardNameOnChange, cardNumberOnChange, cardCvcOnChange, saveProfile}) => {
  const {register, handleSubmit, errors, formState} = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {name, number, cvc}
  });

  const [selectedDate, setSelectedDate] = React.useState(expiration || '');

  const handleDateOnChange = (date) => {
    setSelectedDate(date.toISOString());
  };

  return (
    <div className="center_block bg--cover">
      <Paper className="text--center w--880" style={{padding: '70px'}}>
        <form className="form">
          <div align="center">
            <Typography variant="h1" align="center">
              Профиль
            </Typography>
            <Typography variant="subtitle1" align="center" style={{margin: '-10px 0 30px'}}>
              Введите платежные данные
            </Typography>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField label="Имя владельца" name="name" variant="standard" onChange={cardNameOnChange} inputRef={register} />
              <TextField
                variant="standard"
                label="Номер карты"
                name="number"
                onChange={cardNumberOnChange}
                inputRef={register}
                error={!!errors.number}
                helperText={errors?.number?.message}
              />
              <Grid container spacing={3} className="mb--30">
                <Grid item xs={12} sm={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      inputVariant="standard"
                      margin="none"
                      name="expiration"
                      label="MM/YY"
                      disableToolbar
                      format="MM/yy"
                      value={selectedDate}
                      views={['year', 'month']}
                      disablePast="true"
                      onChange={handleDateOnChange}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    label="CVC"
                    name="cvc"
                    inputProps={{type: 'number', maxLength: 3}}
                    inputRef={register}
                    error={!!errors.cvc}
                    helperText={errors?.cvc?.message}
                    onChange={cardCvcOnChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <PaymentCard number={number} expiration={moment(selectedDate).format('MM/YY')} formState={formState} />
            </Grid>
          </Grid>
          <div align="center">
            <Button
              id="save-button"
              className="w--350"
              onClick={handleSubmit(saveProfile.bind(this, selectedDate))}
              type="submit"
              disabled={!formState.isValid}
            >
              Сохранить
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

ProfileForm.propTypes = {
  handleFormSubmit: PropTypes.func,
  cardNumberOnChange: PropTypes.func,
  cardExpirationOnChange: PropTypes.func,
  number: PropTypes.string,
  expiration: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
};
