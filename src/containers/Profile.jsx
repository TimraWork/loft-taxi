import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {profile} from '../redux/actions';
import {store} from '../redux/store';

import {ProfileForm} from '../components/ProfileForm';

export const Profile = ({token, profile}) => {
  console.log('TOKEN = ', token);
  const saveProfile = (e) => {
    e.preventDefault();
    const {number, expiration, name, cvc} = e.target;
    profile(token, number.value, expiration.value, name.value, cvc.value);
  };

  const storage = JSON.parse(localStorage.getItem('state')).auth.profile;
  const {cardNumber, expiryDate, cardName, cvc} = storage;

  const [number, setNumber] = useState(cardNumber);
  const [expiration, setExpiration] = useState(expiryDate);
  const [name, setName] = useState(cardName);
  const [cvcValue, setCvcValue] = useState(cvc);

  const validateNumbers = (inputValue) => inputValue.replace(/[^\d]/g, '');
  const validateWhiteSpace = (inputValue) => (inputValue.length > 3 ? inputValue.match(/.{1,4}/g).join('  ') : inputValue);

  const cardNumberOnChange = (e) => {
    let inputValue = e.target.value;
    inputValue = validateNumbers(inputValue);
    inputValue = validateWhiteSpace(inputValue);
    setNumber(inputValue);
  };

  const cardExpirationOnChange = (e) => {
    let inputExpValue = e.target.value;
    // inputExpValue = validateNumbers(inputExpValue);
    setExpiration(inputExpValue);
  };

  const cardNameOnChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
  };

  const cardCvcOnChange = (e) => {
    const inputValue = e.target.value;
    setCvcValue(inputValue);
  };

  return (
    <ProfileForm
      handleFormSubmit={saveProfile}
      number={number}
      cardNumberOnChange={cardNumberOnChange}
      expiration={expiration}
      cardExpirationOnChange={cardExpirationOnChange}
      name={name}
      cardNameOnChange={cardNameOnChange}
      cvc={cvcValue}
      cardCvcOnChange={cardCvcOnChange}
    />
  );
};

Profile.propTypes = {
  token: PropTypes.string,
  profile: PropTypes.func,
};

const mapStateToProps = (state) => ({token: state.auth.token});
export const ProfileWithAuth = connect(mapStateToProps, {profile})(Profile);
