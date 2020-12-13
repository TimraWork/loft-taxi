import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {editProfile} from '../modules/profile/actions';

import {ProfileForm} from '../components/ProfileForm';

export const Profile = ({token, profile, editProfile}) => {
  const {cardNumber, expiryDate, cardName, cvc} = profile;

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

  const saveProfile = (e) => {
    e.preventDefault();
    editProfile(token, number, expiration, name, cvcValue);
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
};

const mapStateToProps = (state) => ({token: state.auth.token, profile: state.profile});
export const ProfileWithAuth = connect(mapStateToProps, {editProfile})(Profile);
