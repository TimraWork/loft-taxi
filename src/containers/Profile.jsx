import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setProfile} from '../modules/profile/actions';

import {ProfileForm} from '../components/ProfileForm';

export const Profile = ({token, setProfile}) => {
  // const storage = JSON.parse(localStorage.getItem('state')).auth.profile;
  // const {cardNumber, expiryDate, cardName, cvc} = storage;
  // const {cardNumber, expiryDate, cardName, cvc} = '';

  const [number, setNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [name, setName] = useState('');
  const [cvcValue, setCvcValue] = useState('');

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

  const saveProfile = (e) => {
    e.preventDefault();
    setProfile(token, number, expiration, name, cvcValue);
  };

  return (
    <ProfileForm
      saveProfile={saveProfile}
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
  profile: PropTypes.func
};

const mapStateToProps = (state) => ({token: state.auth.token});
export const ProfileWithAuth = connect(mapStateToProps, {setProfile})(Profile);
