import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';

import {PageMapWithAuth} from './pages/PageMap';
import {PageLogin} from './pages/PageLogin';
import {PageProfileWithAuth} from './pages/PageProfile';
import {PageProfileSuccess} from './pages/PageProfileSuccess';
import {withAuth} from './hoc/AuthContext';

import {Route, Switch, Redirect, useLocation} from 'react-router-dom';

const App = () => {
  const currentUrl = useLocation().pathname;

  const pagesWithoutHeader = new Set(['/login/', '/logout/']);
  const layoutWithoutHeader = pagesWithoutHeader.has(currentUrl) ? ' layout--without_header' : '';

  return (
    <div className={'layout' + layoutWithoutHeader}>
      <Header />
      <main className="main">
        <ErrorBoundary>
          <Switch>
            <Route path="/map/" component={PageMapWithAuth} />
            <Route path="/profile/" exact component={PageProfileWithAuth} />
            <Route path="/login/" component={PageLogin} />
            <Route path="/profile-success/" component={PageProfileSuccess} />
            <Redirect to="/login/" />
          </Switch>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default withAuth(App);
