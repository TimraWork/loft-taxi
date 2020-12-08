import React from 'react';

import {NavWithAuth} from '../containers/Nav';
import logoIcon from '../assets/img/logo-icon.svg';
import logoText from '../assets/img/logo-text.svg';
import {Link} from 'react-router-dom';

export const Header = () => (
  <header>
    <Link to="/map/" className="logo">
      <img src={logoIcon} alt="" className="logo__img logo__img--icon" />
      <img src={logoText} alt="" className="logo__img logo__img--text" />
    </Link>
    <NavWithAuth />
  </header>
);
