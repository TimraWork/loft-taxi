import React, {Component} from 'react';

import Header from './Header';

import PageMap from './PageMap';
import PageLogin from './PageLogin';
import PageProfile from './PageProfile';
import PageReg from './PageRegistration';
import {navUrl as navPath} from './Nav';

const REDIRECT_URL = navPath.PROFILE.path;

export default class App extends Component {
  state = {
    navUrl: REDIRECT_URL,
  };

  handleNavClick = (e, navUrl) => {
    e.preventDefault();
    this.setState({
      navUrl: navUrl,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      navUrl: REDIRECT_URL,
    });
  };

  render() {
    const {navUrl} = this.state;

    const pagesWithoutHeader = new Set([navPath.LOGIN.path, navPath.REGISTRATION.path]);
    const layoutWithoutHeader = pagesWithoutHeader.has(navUrl) ? ' layout--without_header' : '';

    return (
      <div className={'layout' + layoutWithoutHeader}>
        <Header handleNavClick={this.handleNavClick} navUrl={navUrl} />
        <main className="main">
          {navUrl === navPath.MAP.path && <PageMap />}
          {navUrl === navPath.PROFILE.path && <PageProfile handleFormSubmit={this.handleFormSubmit} />}
          {navUrl === navPath.LOGIN.path && <PageLogin handleFormSubmit={this.handleFormSubmit} />}
          {navUrl === navPath.REGISTRATION.path && <PageReg handleFormSubmit={this.handleFormSubmit} />}
        </main>
      </div>
    );
  }
}
