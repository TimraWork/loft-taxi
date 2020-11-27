import { Button, FormControl, Grid, Input, InputLabel, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import PaymentCard from "./PaymentCard";

const Profile = ({ handleFormSubmit }) => {
  const [number, setNumber] = useState("5545  2300  3432  4521");
  const [expiration, setExpiration] = useState("05/08");

  return (
    <Paper className="text--center w--880">
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
              <Input id="name" name="name" placeholder="Loft" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="number">Номер карты</InputLabel>
              <Input id="number" name="number" placeholder={number} onChange={(e) => setNumber(e.target.value)} />
            </FormControl>
            <Grid container spacing={3} className="mb--30">
              <Grid item xs={12} sm={6}>
                <FormControl>
                  <InputLabel htmlFor="expiration">MM/YY</InputLabel>
                  <Input id="expiration" name="expiration" placeholder={expiration} onChange={(e) => setExpiration(e.target.value)} />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl>
                  <InputLabel htmlFor="cvc">CVC</InputLabel>
                  <Input id="cvc" name="cvc" placeholder="667" />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <PaymentCard number={number} expiration={expiration} />
          </Grid>
        </Grid>
        <div align="center">
          <Button className="w--350">Сохранить</Button>
        </div>
      </form>
    </Paper>
  );
};

export default Profile;
