import React from 'react';
import ErrorBoundary from './ErrorBoundary';

export const navUrl = {
  MAP: {
    name: 'Карта',
    path: '/map/',
  },
  LOGIN: {
    name: 'Логин',
    path: '/login/',
  },
  REGISTRATION: {
    name: 'Регистрация',
    path: '/registration/',
  },
  PROFILE: {
    name: 'Профиль',
    path: '/profile/',
  },
};

const NAVIGATION_ITEMS = Object.values(navUrl);

const Nav = ({handleNavClick, navUrl}) => (
  <ErrorBoundary>
    <nav className="nav">
      {NAVIGATION_ITEMS.map((item) => (
        <a
          href={item.path}
          className={'nav__item' + (navUrl === item.path ? ' nav__item--active' : '')}
          key={item.path}
          onClick={(e) => handleNavClick(e, item.path)}
        >
          {item.name}
        </a>
      ))}
    </nav>
  </ErrorBoundary>
);

export default Nav;
