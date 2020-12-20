import React from 'react';
import {Route, Switch, Redirect, useLocation} from 'react-router-dom';

import {Header} from './Header';

import {MapWithAuth} from '../containers/Мap';
import {LoginWithAuth} from '../containers/Login';
import {ProfileWithAuth} from '../containers/Profile';
import {RegistrationWithAuth} from '../containers/Registration';

import {PrivateRoute} from '../utils/PrivateRoute';

export const App = () => {
  const currentPath = useLocation().pathname;
  const pagesWithoutHeader = new Set(['/login/', '/logout/', '/registration/']);
  const layoutWithoutHeader = pagesWithoutHeader.has(currentPath) ? ' layout--without_header' : '';

  return (
    <div className={'layout' + layoutWithoutHeader}>
      <Header />
      <main className="main">
        <Switch>
          <Route path="/registration/" component={RegistrationWithAuth} />
          <Route path="/login/" exact component={LoginWithAuth} />
          <Route path="/logout/" component={LoginWithAuth} />

          <PrivateRoute path="/map/" component={MapWithAuth} />
          <PrivateRoute path="/profile/" component={ProfileWithAuth} />
          <PrivateRoute path="/profile/" component={ProfileWithAuth} />

          <Redirect to="/login/" component={LoginWithAuth} />
        </Switch>
      </main>
    </div>
  );
};
