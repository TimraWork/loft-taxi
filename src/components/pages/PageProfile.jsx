import React from 'react';
import {ProfileForm} from '../ProfileForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logOut} from '../../actions';

export const PageProfile = ({navigate}) => {
  const setNavigateTo = (e) => {
    navigate(e, '/profile-success/');
  };

  return <ProfileForm handleFormSubmit={setNavigateTo} />;
};

PageProfile.propTypes = {
  navigate: PropTypes.func,
};

export const PageProfileWithAuth = connect(null, {logOut})(PageProfile);
