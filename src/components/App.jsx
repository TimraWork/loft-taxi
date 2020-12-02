import React, {Component} from 'react';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';

import {PageMapWithAuth} from './pages/PageMap';
import {PageLogin} from './pages/PageLogin';
import {PageProfileWithAuth} from './pages/PageProfile';
import {PageProfileSuccess} from './pages/PageProfileSuccess';
import {navUrl as navPath} from './Nav';
import {withAuth} from './hoc/AuthContext';

let REDIRECT_URL = navPath.LOGOUT.path;

class App extends Component {
  state = {
    currentUrl: REDIRECT_URL
  };

  PAGES = {
    '/map/': (props) => <PageMapWithAuth {...props} />,
    '/logout/': (props) => <PageLogin {...props} />,
    '/profile/': (props) => <PageProfileWithAuth {...props} />,
    '/profile-success/': (props) => <PageProfileSuccess {...props} />
  };

  navigateTo = (e, currentPage) => {
    e.preventDefault();
    if (this.props.isLoggedIn) {
      this.setState({currentUrl: currentPage});
    } else {
      this.props.logout();
      this.setState({currentUrl: REDIRECT_URL});
    }
  };

  render() {
    const {currentUrl} = this.state;

    const pagesWithoutHeader = new Set([navPath.LOGOUT.path]);
    const layoutWithoutHeader = pagesWithoutHeader.has(currentUrl) ? ' layout--without_header' : '';

    return (
      <div className={'layout' + layoutWithoutHeader}>
        <Header handleNavClick={this.navigateTo} navUrl={currentUrl} />
        <main className="main">
          <ErrorBoundary>{this.PAGES[currentUrl]({navigate: this.navigateTo})}</ErrorBoundary>
        </main>
      </div>
    );
  }
}

export default withAuth(App);
