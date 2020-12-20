import React from 'react';
import PropTypes from 'prop-types';

export const PaymentCard = ({number, expiration, validationErrors}) => (
  <div className={`card white_container ${!validationErrors ? 'card--visa' : ''}`}>
    <div className="card__expiration">{expiration}</div>
    <div className="card__number">{number}</div>
  </div>
);

PaymentCard.propTypes = {
  number: PropTypes.string,
  expiration: PropTypes.string,
  validationErrors: PropTypes.object
};
