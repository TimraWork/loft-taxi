import React from 'react';

import {NavWithAuth} from './Nav';
import logoIcon from '../assets/img/logo-icon.svg';
import logoText from '../assets/img/logo-text.svg';

export const HeaderView = () => (
  <header>
    <a href={'/'} className="logo">
      <img src={logoIcon} alt="" className="logo__img logo__img--icon" />
      <img src={logoText} alt="" className="logo__img logo__img--text" />
    </a>
    <NavWithAuth />
  </header>
);
