import React from 'react';

import Nav from '../components/nav';
import LogoIcon from '../assets/img/logo-icon.svg';
import LogoText from '../assets/img/logo-text.svg';

const HeaderView = ({handleNavClick, navUrl}) => {
  return (
    <header>
      <a href={'/'} className="logo">
        <img src={LogoIcon} alt="" className="logo__img logo__img--icon" />
        <img src={LogoText} alt="" className="logo__img logo__img--text" />
      </a>
      <Nav handleNavClick={handleNavClick} navUrl={navUrl} />
    </header>
  );
};

export default HeaderView;
