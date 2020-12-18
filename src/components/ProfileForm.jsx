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
  number: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(...Object.values(setMinMax(22)))
    .max(...Object.values(setMinMax(22))),
  cvc: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(...Object.values(setMinMax(3)))
    .max(...Object.values(setMinMax(3)))
});

export const ProfileForm = ({saveProfile, number, cardNumberOnChange, expiration, name, cardNameOnChange, cvc, cardCvcOnChange}) => {
  const {register, handleSubmit, errors} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const [selectedDate, setSelectedDate] = React.useState(expiration || '');

  const handleDateChange = (date) => {
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
              <TextField label="Имя владельца" value={name} name="name" variant="standard" onChange={cardNameOnChange} />
              <TextField
                variant="standard"
                label="Номер карты"
                name="number"
                value={number}
                onChange={cardNumberOnChange}
                inputProps={{maxLength: 22}}
                inputRef={register}
                error={!!errors.number}
                helperText={errors?.number?.message}
              />
              <Grid container spacing={3} className="mb--30">
                <Grid item xs={12} sm={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      inputVariant="standard"
                      disableToolbar
                      format="MM/yy"
                      margin="none"
                      name="expiration"
                      id="date-picker-inline"
                      label="MM/YY"
                      value={selectedDate}
                      onChange={handleDateChange}
                      invalidDateMessage="Неверный формат даты"
                      views={['year', 'month']}
                      disablePast="true"
                      minDateMessage="Дата не должна быть раньше текущей"
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    label="CVC"
                    value={cvc}
                    name="cvc"
                    inputProps={{maxLength: 3}}
                    onChange={cardCvcOnChange}
                    inputRef={register}
                    error={!!errors.cvc}
                    helperText={errors?.cvc?.message}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <PaymentCard number={number} expiration={moment(selectedDate).format('MM/YY')} />
            </Grid>
          </Grid>
          <div align="center">
            <Button id="save-button" className="w--350" onClick={handleSubmit(saveProfile.bind(this, selectedDate))} type="submit">
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
  expiration: PropTypes.string
};
