import React, {useState} from 'react';
import {connect} from 'react-redux';
import {editProfile} from '../modules/profile/actions';

import {ProfileForm} from '../components/ProfileForm';
import {ProfileSuccess} from '../components/ProfileSuccess';
import {Alert} from '@material-ui/core';

export const Profile = ({token, profile, editProfile}) => {
  const {cardNumber, expiryDate, cardName, cvc} = profile;

  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  const [number, setNumber] = useState(cardNumber || '');
  const [name, setName] = useState(cardName || '');
  const [cvcValue, setCvcValue] = useState(cvc || '');

  const [expiration, setExpiration] = useState(expiryDate || new Date());

  const validateNumbers = (inputValue) => inputValue.replace(/[^\d]/g, '');
  const validateWhiteSpace = (inputValue) => (inputValue.length > 3 ? inputValue.match(/.{1,4}/g).join('  ') : inputValue);

  const cardNumberOnChange = (e) => {
    let inputValue = e.target.value;
    inputValue = validateNumbers(inputValue);
    inputValue = validateWhiteSpace(inputValue);
    setNumber(inputValue);
  };

  const cardNameOnChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
  };

  const cardCvcOnChange = (e) => {
    let inputValue = e.target.value;
    inputValue = validateNumbers(inputValue);
    setCvcValue(inputValue);
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
