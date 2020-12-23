import React from 'react';
import {Route, Switch, Redirect, useLocation} from 'react-router-dom';

import {Header} from '../components/Header';
import {MapWithAuth} from './Мap';
import {LoginWithAuth} from './Login';
import {ProfileWithAuth} from './Profile';
import {RegistrationWithAuth} from './Registration';

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
          <Route path="/login/" exact component={LoginWithAuth} />
          <Route path="/logout/" component={LoginWithAuth} />
          <Route path="/registration/" component={RegistrationWithAuth} />

          <PrivateRoute path="/map/" component={MapWithAuth} />
          <PrivateRoute path="/profile/" component={ProfileWithAuth} />

          <Redirect to="/login/" component={LoginWithAuth} />
        </Switch>
      </main>
    </div>
  );
};
