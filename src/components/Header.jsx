import React from 'react';

import {NavWithAuth} from './Nav';
import logoIcon from '../assets/img/logo-icon.svg';
import logoText from '../assets/img/logo-text.svg';
import PropTypes from 'prop-types';

const HeaderView = ({handleNavClick, navUrl}) => (
  <header>
    <a href={'/'} className="logo">
      <img src={logoIcon} alt="" className="logo__img logo__img--icon" />
      <img src={logoText} alt="" className="logo__img logo__img--text" />
    </a>
    <NavWithAuth handleNavClick={handleNavClick} navUrl={navUrl} />
  </header>
);

export default HeaderView;

HeaderView.propTypes = {
  navUrl: PropTypes.string,
  handleFormSubmit: PropTypes.func,
};
