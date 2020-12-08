import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {profile} from '../redux/actions';

import {ProfileForm} from '../components/ProfileForm';

export const Profile = ({token, profile}) => {
  const profileCard = (e) => {
    e.preventDefault();
    const {number, expiration, name, cvc} = e.target;
    profile(token, number.value, expiration.value, name.value, cvc.value);
  };

  const [number, setNumber] = useState('5545  2300  3432  4521');
  const [expiration, setExpiration] = useState('05/08');

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
    inputExpValue = validateNumbers(inputExpValue);
    setExpiration(inputExpValue);
  };

  return (
    <ProfileForm
      handleFormSubmit={profileCard}
      number={number}
      cardNumberOnChange={cardNumberOnChange}
      expiration={expiration}
      cardExpirationOnChange={cardExpirationOnChange}
    />
  );
};

Profile.propTypes = {
  token: PropTypes.string,
  profile: PropTypes.func
};

const mapStateToProps = (state) => ({token: state.auth.token});
export const ProfileWithAuth = connect(mapStateToProps, {profile})(Profile);
