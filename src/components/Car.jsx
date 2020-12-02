import {Card, CardActionArea, CardContent, Grid, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';

import standard from '../assets/img/car1.png';
import premium from '../assets/img/car2.png';
import business from '../assets/img/car3.png';

const CAR = {standard, premium, business};

export const Car = ({type, name, price}) => (
  <Grid item xs={12} sm={4}>
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="body1">{name}</Typography>
          <Typography variant="caption" color="textSecondary">
            Стоимость
          </Typography>
          <Typography variant="h6">{price}₽</Typography>
          <img className="car__img" src={CAR[type]} alt={type} />
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
);

Car.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.number
};
