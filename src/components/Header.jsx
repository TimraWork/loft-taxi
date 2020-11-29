import React from 'react';

import {Nav} from './Nav';
import logoIcon from '../assets/img/logo-icon.svg';
import logoText from '../assets/img/logo-text.svg';

const HeaderView = ({handleNavClick, navUrl}) => (
  <header>
    <a href={'/'} className="logo">
      <img src={logoIcon} alt="" className="logo__img logo__img--icon" />
      <img src={logoText} alt="" className="logo__img logo__img--text" />
    </a>
    <Nav handleNavClick={handleNavClick} navUrl={navUrl} />
  </header>
);

export default HeaderView;
