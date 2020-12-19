import React from 'react';
import {NavLink} from 'react-router-dom';

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
  return (
    <nav className="nav">
      {NAVIGATION_ITEMS.map((item) => (
        <NavLink key={item.path} to={item.path} className="nav__item" exact>
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};
