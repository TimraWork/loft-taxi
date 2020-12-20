import React, {useState} from 'react';
import {connect} from 'react-redux';
import {editProfile} from '../modules/profile/actions';

import {ProfileForm} from '../components/ProfileForm';
import {ProfileSuccess} from '../components/ProfileSuccess';
import {Alert} from '@material-ui/core';
import {normalizeCardNumber, normalizeCVC} from '../utils/functions';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import {useForm} from 'react-hook-form';

const setMinValidation = (countSymbols) => {
  const message = `Должно быть ровно ${countSymbols} символа`;
  return {countSymbols, message};
};

const schema = yup.object().shape({
  name: yup.string(),
  number: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(...Object.values(setMinValidation(22))),
  cvc: yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(...Object.values(setMinValidation(3)))
});

const Profile = ({token, profile, editProfile}) => {
  const {cardName, cardNumber, expiryDate, cvc} = profile;

  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  const [name, setName] = useState(cardName || '');
  const [number, setNumber] = useState(cardNumber || '');
  const [expiration, setExpiration] = useState(expiryDate || '');
  const [cvcValue, setCvcValue] = useState(cvc || '');

  const {register, handleSubmit, errors, formState} = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {name, number, cvc, expiration}
  });

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
          errors={errors}
          register={register}
          formState={formState}
          handleSubmit={handleSubmit}
          expiration={expiration}
          number={number}
          cardNameOnChange={cardNameOnChange}
          cardNumberOnChange={cardNumberOnChange}
          cardExpirationOnChange={cardExpirationOnChange}
          cardCvcOnChange={cardCvcOnChange}
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
