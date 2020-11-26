import React, {Component} from 'react';

import Header from './Header';

import PageMap from './PageMap';
import PageLogin from './PageLogin';
import PageProfile from './PageProfile';
import {navUrl as navPath} from './Nav';
import {authHOC} from './hoc/AuthContext';

let REDIRECT_URL = navPath.LOGOUT.path;

class App extends Component {
  state = {
    navUrl: REDIRECT_URL,
  };

  componentDidUpdate(prevProps) {
    console.log(this.props.isLoggedIn);
    if (this.props.isLoggedIn !== prevProps.isLoggedIn) {
      REDIRECT_URL = navPath.MAP.path;
    } else {
      REDIRECT_URL = navPath.LOGOUT.path;
    }
  }

  handleNavClick = (e, navUrl) => {
    e.preventDefault();
    if (navUrl === navPath.LOGOUT.path) {
      this.props.logout();
    }
    this.setState({
      navUrl: navUrl,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const {email, password} = e.target;
    if (email.value === 'test@test.com' && password.value === '123') {
      this.props.login();

      this.setState({
        navUrl: REDIRECT_URL,
      });
    }
  };

  render() {
    const {navUrl} = this.state;

    const pagesWithoutHeader = new Set([navPath.LOGOUT.path]);
    const layoutWithoutHeader = pagesWithoutHeader.has(navUrl) ? ' layout--without_header' : '';

    return (
      <div className={'layout' + layoutWithoutHeader}>
        <Header handleNavClick={this.handleNavClick} navUrl={navUrl} />
        <main className="main">
          {navUrl === navPath.MAP.path && <PageMap />}
          {navUrl === navPath.PROFILE.path && <PageProfile handleFormSubmit={this.handleFormSubmit} />}
          {navUrl === navPath.LOGOUT.path && <PageLogin handleFormSubmit={this.handleFormSubmit} />}
        </main>
      </div>
    );
  }
}

export default authHOC(App);
