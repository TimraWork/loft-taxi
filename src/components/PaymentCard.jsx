import React from 'react';
import PropTypes from 'prop-types';

export const PaymentCard = ({number, expiration, formState}) => (
  <div className={`card white_container ${formState && !formState.errors.number ? 'card--visa' : ''}`}>
    <div className="card__expiration">{expiration}</div>
    <div className="card__number">{number}</div>
  </div>
);

PaymentCard.propTypes = {
  number: PropTypes.string,
  expiration: PropTypes.string
};
