import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';

import {PageMap} from './pages/PageMap';
import {PageLoginWithAuth} from './pages/PageLogin';
import {PageProfileWithAuth} from './pages/PageProfile';
import {PageProfileSuccess} from './pages/PageProfileSuccess';
import {PageRegistration} from './pages/PageRegistration';

import {logIn} from '../actions';
import {connect} from 'react-redux';

import {Route, Switch, Redirect, useLocation} from 'react-router-dom';

let PrivateRoute = (props) => {
  const {component: Component, isLoggedIn, ...rest} = props;
  return <Route {...rest} render={(routeProps) => (isLoggedIn ? <Component {...routeProps} /> : <Redirect to="/login/" />)} />;
};
PrivateRoute = connect((state) => ({isLoggedIn: state.auth.isLoggedIn}), {logIn})(PrivateRoute);

export const App = () => {
  const currentPath = useLocation().pathname;
  const pagesWithoutHeader = new Set(['/login/', '/logout/', '/registration/']);
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

            <PrivateRoute path="/map/" component={PageMap} />
            <PrivateRoute path="/profile/" component={PageProfileWithAuth} />
            <PrivateRoute path="/profile-success/" component={PageProfileSuccess} />

            <Redirect to="/login/" component={PageLoginWithAuth} />
          </Switch>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default connect((state) => ({isLoggedIn: state.auth.isLoggedIn}))(App);
