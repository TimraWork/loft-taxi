import React, {useState} from 'react';
import {connect} from 'react-redux';
import {editProfile} from '../modules/profile/actions';

import {ProfileForm} from '../components/ProfileForm';
import {ProfileSuccess} from '../components/ProfileSuccess';
import {Alert} from '@material-ui/core';

const normalizeCardNumber = (value) => {
  return (
    value
      .replace(/\s/g, '')
      .replace(/[^\d]/g, '') // numbers
      .match(/.{1,4}/g)
      ?.join('  ')
      .substr(0, 22) || ''
  );
};

export const Profile = ({token, profile, editProfile}) => {
  const {cardNumber, expiryDate, cardName, cvc} = profile;

  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  const [number, setNumber] = useState(cardNumber || '');
  const [name, setName] = useState(cardName || '');
  const [cvcValue, setCvcValue] = useState(cvc || '');
  const [expiration, setExpiration] = useState(expiryDate || '');

  const cardNumberOnChange = (e) => {
    const {value} = e.target;
    e.target.value = normalizeCardNumber(value);
    setNumber(e.target.value);
  };

  const cardNameOnChange = (e) => {
    setName(e.target.value);
  };

  const cardCvcOnChange = (e) => {
    setCvcValue(e.target.value);
  };

  const saveProfile = (selectedDate) => {
    if (!profile.error) {
      setExpiration(selectedDate);
      editProfile(token, number, selectedDate, name, cvcValue);
      setIsProfileUpdated(true);
    }
  };

  return (
    <>
      {isProfileUpdated ? (
        <ProfileSuccess />
      ) : (
        <ProfileForm
          saveProfile={saveProfile}
          number={number}
          cardNumberOnChange={cardNumberOnChange}
          expiration={expiration}
          name={name}
          cardNameOnChange={cardNameOnChange}
          cvc={cvcValue}
          cardCvcOnChange={cardCvcOnChange}
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
