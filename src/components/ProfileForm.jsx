import {Button, Grid, Paper, TextField, Typography} from '@material-ui/core';
import React from 'react';
import {PaymentCard} from './PaymentCard';
import PropTypes from 'prop-types';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';

export const ProfileForm = ({
  errors,
  register,
  formState,
  handleSubmit,
  expiration,
  number,
  cardNameOnChange,
  cardNumberOnChange,
  cardExpirationOnChange,
  cardCvcOnChange,
  saveProfile
}) => (
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
            <TextField
              label="Имя владельца"
              id="name"
              name="name"
              variant="standard"
              onChange={cardNameOnChange}
              inputRef={register}
            />
            <TextField
              variant="standard"
              label="Номер карты *"
              id="number"
              name="number"
              inputRef={register}
              error={!!errors.number}
              helperText={errors?.number?.message}
              onChange={cardNumberOnChange}
            />
            <Grid container spacing={3} className="mb--30">
              <Grid item xs={12} sm={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    inputVariant="standard"
                    margin="none"
                    name="expiration"
                    id="expiration"
                    value={expiration}
                    label="MM/YY *"
                    disableToolbar
                    format="MM/yy"
                    views={['year', 'month']}
                    disablePast="true"
                    onChange={cardExpirationOnChange}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  label="CVC *"
                  id="cvc"
                  name="cvc"
                  inputRef={register}
                  error={!!errors.cvc}
                  helperText={errors?.cvc?.message}
                  onChange={cardCvcOnChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <PaymentCard number={number} expiration={moment(expiration).format('MM/YY')} formState={formState} />
          </Grid>
        </Grid>
        <div align="center">
          <Button
            id="save-button"
            className="w--350"
            onClick={handleSubmit(saveProfile)}
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

ProfileForm.propTypes = {
  errors: PropTypes.object,
  register: PropTypes.func,
  formState: PropTypes.object,
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func,
  expiration: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  number: PropTypes.string,
  cardNameOnChange: PropTypes.func,
  cardNumberOnChange: PropTypes.func,
  cardExpirationOnChange: PropTypes.func,
  cardCvcOnChange: PropTypes.func,
  saveProfile: PropTypes.func
};
