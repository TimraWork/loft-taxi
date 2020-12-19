import React from 'react';
import {NavLink} from 'react-router-dom';

import {connect} from 'react-redux';
import {logOut} from '../modules/auth';
import {store} from '../redux/store';

export const navUrl = {
  MAP: {
    name: 'Карта',
    path: '/map/'
  },
  PROFILE: {
    name: 'Профиль',
    path: '/profile/'
  },
  LOGOUT: {
    name: 'Выйти',
    path: '/logout/'
  }
};

export const NAVIGATION_ITEMS = Object.values(navUrl);

export const Nav = () => {
  const handleNavClick = (path) => {
    if (path === '/logout/') {
      store.dispatch(logOut());
    }
  };
  return (
    <nav className="nav">
      {NAVIGATION_ITEMS.map((item) => (
        <NavLink key={item.path} to={item.path} className="nav__item" exact onClick={() => handleNavClick(item.path)}>
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export const NavWithAuth = connect(null, {logOut})(Nav);
