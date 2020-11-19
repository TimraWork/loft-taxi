import React, {Component} from 'react';

import Header from '../components/header';

import PageMap from '../components/page-map';
import PageLogin from '../components/page-login';
import PageProfile from '../components/page-profile';
import PageReg from '../components/page-registration';
import {navUrl as navPath} from '../components/nav';

const REDIRECT_URL = navPath.MAP.path;

export default class App extends Component {
  state = {
    navUrl: REDIRECT_URL,
  };

  handleNavClick = (navUrl, evt) => {
    evt.preventDefault();
    this.setState({
      navUrl: navUrl,
    });
  };

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      navUrl: REDIRECT_URL,
    });
  };

  render() {
    const {navUrl} = this.state;

    return (
      <div className={ 'container' +
            ((navUrl === navPath.LOGIN.path || navUrl === navPath.REGISTRATION.path)
              ? ' container--column'
              : '')}
      >
        <Header handleNavClick={this.handleNavClick} navUrl={navUrl} />
        <main className="main">
          {(() => {
            switch (navUrl) {
              case navPath.MAP.path:
                return <PageMap />;
              case navPath.PROFILE.path:
                return <PageProfile handleFormSubmit={this.handleFormSubmit} />;
              case navPath.LOGIN.path:
                return <PageLogin handleFormSubmit={this.handleFormSubmit} />;
              case navPath.REGISTRATION.path:
                return <PageReg handleFormSubmit={this.handleFormSubmit} />;
              default:
                return <div>404</div>;
            }
          })()}
        </main>
      </div>
    );
  }
}
