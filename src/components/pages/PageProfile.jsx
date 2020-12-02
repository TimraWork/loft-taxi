import React from 'react';
import {ProfileForm} from '../ProfileForm';
import {withAuth} from '../hoc/AuthContext';
import PropTypes from 'prop-types';

export const PageProfile = ({navigate}) => {
  const setNavigateTo = (e) => {
    navigate(e, '/profile-success/');
  };

  return <ProfileForm handleFormSubmit={setNavigateTo} />;
};

PageProfile.propTypes = {
  navigate: PropTypes.func
};

export const PageProfileWithAuth = withAuth(PageProfile);
