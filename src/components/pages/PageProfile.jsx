import React from 'react';
import {ProfileForm} from '../ProfileForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {profile} from '../../actions';
import {store} from '../../store';

export const PageProfile = ({profile}) => {
  console.log('PROFILE store.getState().auth.token ~~~', store.getState().auth.token);

  const profileCard = (e) => {
    e.preventDefault();
    const {number, expiration, name, cvc} = e.target;
    profile(store.getState().auth.token, number.value, expiration.value, name.value, cvc.value);
  };

  return <ProfileForm handleFormSubmit={profileCard} />;
};

PageProfile.propTypes = {
  navigate: PropTypes.func,
};

export const PageProfileWithAuth = connect(null, {profile})(PageProfile);
