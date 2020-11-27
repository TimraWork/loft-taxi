import React from 'react';
import PropTypes from 'prop-types';

const PaymentCard = ({number, expiration}) => (
  <div className="card white_container">
    <div className="card__expiration">{expiration}</div>
    <div className="card__number">{number}</div>
  </div>
);

PaymentCard.propTypes = {
  number: PropTypes.string,
  expiration: PropTypes.string,
};

export default PaymentCard;
