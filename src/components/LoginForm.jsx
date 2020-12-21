import React from 'react';
import {Paper, Box, Button, Typography, TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const LoginForm = ({errors, register, formState, onSubmit, handleSubmit}) => (
  <div className="center_block">
    <Paper style={{padding: '70px'}}>
      <form className="form w--350" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h1" align="center">
          Войти
        </Typography>
        <TextField
          inputRef={register}
          variant="standard"
          label="Email *"
          name="email"
          id="email"
          inputProps={{type: 'email'}}
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <TextField
          inputRef={register}
          style={{marginBottom: '50px'}}
          variant="standard"
          label="Пароль *"
          name="password"
          id="password"
          inputProps={{type: 'password'}}
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        <Button id="login-button" className="mb--30" disabled={!formState.isValid}>
          Войти
        </Button>
        <Box sx={{textAlign: 'center'}}>
          Новый пользователь?&nbsp;
          <Link to="/registration/" id="registration-link" href="#" color="secondary">
            Регистрация
          </Link>
        </Box>
      </form>
    </Paper>
  </div>
);

LoginForm.propTypes = {
  errors: PropTypes.object,
  register: PropTypes.func,
  formState: PropTypes.object,
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func
};
