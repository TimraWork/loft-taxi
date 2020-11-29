import React, {Component} from 'react';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';

import {PageMap} from './PageMap';
import {PageLogin} from './PageLogin';
import {PageProfile} from './PageProfile';
import {navUrl as navPath} from './Nav';
import {authHOC} from './hoc/AuthContext';

let REDIRECT_URL = navPath.MAP.path;

class App extends Component {
  state = {
    currentUrl: REDIRECT_URL,
  };

  PAGES = {
    '/map/': <PageMap />,
    '/logout/': <PageLogin handleFormSubmit={this.handleFormSubmit} />,
    '/profile/': <PageProfile handleFormSubmit={this.handleFormSubmit} />,
  };

  handleNavClick = (e, navUrl) => {
    e.preventDefault();
    if (navUrl === navPath.LOGOUT.path) {
      this.props.logout();
    }
    this.setState({
      currentUrl: navUrl,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const {email, password} = e.target;
    // if (email.value === 'test@test.com' && password.value === '123') {
    this.props.login();
    REDIRECT_URL = navPath.MAP.path;
    this.setState({
      currentUrl: REDIRECT_URL,
    });
    // }
  };

  render() {
    const {currentUrl} = this.state;

    const pagesWithoutHeader = new Set([navPath.LOGOUT.path]);
    const layoutWithoutHeader = pagesWithoutHeader.has(currentUrl) ? ' layout--without_header' : '';

    return (
      <div className={'layout' + layoutWithoutHeader}>
        <Header handleNavClick={this.handleNavClick} navUrl={currentUrl} />
        <main className="main">
          <ErrorBoundary>{this.PAGES[currentUrl]}</ErrorBoundary>
        </main>
      </div>
    );
  }
}

export default authHOC(App);
