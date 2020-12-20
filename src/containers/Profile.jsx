import React, {useState} from 'react';
import {connect} from 'react-redux';
import {editProfile} from '../modules/profile/actions';

import {ProfileForm} from '../components/ProfileForm';
import {ProfileSuccess} from '../components/ProfileSuccess';
import {Alert} from '@material-ui/core';

const normalizeCardNumber = (value) =>
  value
    .replace(/\s/g, '')
    .replace(/[^\d]/g, '') // numbers
    .match(/.{1,4}/g)
    ?.join('  ')
    .substr(0, 22) || '';

const normalizeCVC = (value) => value.replace(/\s/g, '').replace(/[^\d]/g, '').substr(0, 3) || ''; // numbers

export const Profile = ({token, profile, editProfile}) => {
  const {cardName, cardNumber, expiryDate, cvc} = profile;

  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  const [name, setName] = useState(cardName || '');
  const [number, setNumber] = useState(cardNumber || '');
  const [expiration, setExpiration] = useState(expiryDate || '');
  const [cvcValue, setCvcValue] = useState(cvc || '');

  const cardNameOnChange = (e) => {
    setName(e.target.value);
  };

  const cardNumberOnChange = (e) => {
    const {value} = e.target;
    e.target.value = normalizeCardNumber(value);
    setNumber(e.target.value);
  };

  const cardExpirationOnChange = (date) => {
    setExpiration(date.toISOString());
    console.log(expiration);
  };

  const cardCvcOnChange = (e) => {
    const {value} = e.target;
    e.target.value = normalizeCVC(value);
    setCvcValue(e.target.value);
  };

  const saveProfile = () => {
    if (!profile.error) {
      editProfile(token, number, expiration, name, cvcValue);
      setIsProfileUpdated(true);
    }
  };

  return (
    <>
      {isProfileUpdated ? (
        <ProfileSuccess />
      ) : (
        <ProfileForm
          name={name}
          number={number}
          expiration={expiration}
          cvc={cvcValue}
          cardNameOnChange={cardNameOnChange}
          cardCvcOnChange={cardCvcOnChange}
          cardExpirationOnChange={cardExpirationOnChange}
          cardNumberOnChange={cardNumberOnChange}
          saveProfile={saveProfile}
        />
      )}
      {profile.error && (
        <Alert className="server_error" severity="error">
          {profile.error}
        </Alert>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({token: state.auth.token, profile: state.profile});
export const ProfileWithAuth = connect(mapStateToProps, {editProfile})(Profile);
