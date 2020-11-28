import React from "react";
import Paper from "@material-ui/core/Paper";
import { Box, Button, FormControl, Input, InputLabel, Link, Typography } from "@material-ui/core";

const PageLogin = ({ handleFormSubmit }) => {
  return (
    <div className="center_block">
      <Paper style={{ padding: "70px" }}>
        <form className="form w--350" onSubmit={handleFormSubmit}>
          <Typography variant="h1" align="center">
            Войти
          </Typography>
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" name="email" type="email" placeholder="mail@mail.ru" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="password">Пароль</InputLabel>
            <Input id="password" name="password" type="password" placeholder="*************" />
          </FormControl>
          <Box sx={{ mb: 5, textAlign: "right" }}>
            <Link href="#" color="secondary">
              Забыли пароль?
            </Link>
          </Box>
          <Button className="mb--30">Войти</Button>
          <Box sx={{ textAlign: "center" }}>
            Новый пользователь?&nbsp;
            <Link href="#" color="secondary">
              Регистрация
            </Link>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default PageLogin;
