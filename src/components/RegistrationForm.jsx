import React from 'react';
import {Paper, Box, Button, Typography, TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const RegistrationForm = ({errors, register, formState, onSubmit, handleSubmit}) => (
  <div className="center_block">
    <Paper style={{padding: '70px'}}>
      <form className="form w--350" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h1" align="center">
          Регистрация
        </Typography>
        <TextField
          variant="standard"
          label="Email *"
          name="email"
          inputProps={{type: 'text'}}
          inputRef={register}
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <TextField
          variant="standard"
          label="Имя *"
          name="name"
          inputRef={register}
          error={!!errors.name}
          helperText={errors?.name?.message}
        />
        <TextField
          variant="standard"
          label="Фамилия *"
          name="surname"
          inputRef={register}
          error={!!errors.surname}
          helperText={errors?.surname?.message}
        />
        <TextField
          style={{marginBottom: '50px'}}
          variant="standard"
          label="Придумайте пароль *"
          name="password"
          inputProps={{type: 'password'}}
          inputRef={register}
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        <Button id="login-button" className="mb--30" disabled={!formState.isValid}>
          Зарегистрироваться
        </Button>
        <Box sx={{textAlign: 'center'}}>
          Уже зарегистрированы?&nbsp;
          <Link to="/login/" id="login-link" href="#" color="secondary">
            Войти
          </Link>
        </Box>
      </form>
    </Paper>
  </div>
);

RegistrationForm.propTypes = {
  errors: PropTypes.object,
  register: PropTypes.func,
  formState: PropTypes.object,
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func
};
