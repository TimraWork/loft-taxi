import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';

import {PageMapWithAuth} from './pages/PageMap';
import {PageLoginWithAuth} from './pages/PageLogin';
import {PageProfileWithAuth} from './pages/PageProfile';
import {PageProfileSuccess} from './pages/PageProfileSuccess';
import {PageRegistration} from './pages/PageRegistration';
import {withAuth} from './hoc/AuthContext';

import {Route, Switch, Redirect, useLocation} from 'react-router-dom';

let PrivateRoute = (props) => {
  const {component: RouteComponent, isLoggedIn, ...rest} = props;
  return <Route {...rest} render={(routeProps) => (isLoggedIn ? <RouteComponent {...routeProps} /> : <Redirect to="/login/" />)} />;
};
PrivateRoute = withAuth(PrivateRoute);

const App = () => {
  const currentPath = useLocation().pathname;
  const pagesWithoutHeader = new Set(['/login/', '/logout/']);
  const layoutWithoutHeader = pagesWithoutHeader.has(currentPath) ? ' layout--without_header' : '';

  return (
    <div className={'layout' + layoutWithoutHeader}>
      <Header />
      <main className="main">
        <ErrorBoundary>
          <Switch>
            <Route path="/registration/" component={PageRegistration} />
            <Route path="/login/" exact component={PageLoginWithAuth} />
            <Route path="/logout/" exact component={PageLoginWithAuth} />

            <PrivateRoute path="/map/" component={PageMapWithAuth} />
            <PrivateRoute path="/profile/" component={PageProfileWithAuth} />
            <PrivateRoute path="/profile-success/" component={PageProfileSuccess} />

            <Redirect to="/login/" component={PageLoginWithAuth} />
          </Switch>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default withAuth(App);
