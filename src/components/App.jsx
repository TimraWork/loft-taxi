import React from 'react';
import {Route, Switch, Redirect, useLocation} from 'react-router-dom';

import {HeaderView} from './Header';

import {PageMap} from './pages/PageMap';
import {PageLoginWithAuth} from './pages/PageLogin';
import {PageProfileWithAuth} from './pages/PageProfile';
import {PageProfileSuccess} from './pages/PageProfileSuccess';
import {PageRegistrationWithAuth} from './pages/PageRegistration';

import {PrivateRoute} from './PrivateRoute';

export const App = () => {
  const currentPath = useLocation().pathname;
  const pagesWithoutHeader = new Set(['/login/', '/logout/', '/registration/']);
  const layoutWithoutHeader = pagesWithoutHeader.has(currentPath) ? ' layout--without_header' : '';

  return (
    <div className={'layout' + layoutWithoutHeader}>
      <HeaderView />
      <main className="main">
        <Switch>
          <Route path="/registration/" component={PageRegistrationWithAuth} />
          <Route path="/login/" exact component={PageLoginWithAuth} />
          <Route path="/logout/" component={PageLoginWithAuth} />

          <PrivateRoute path="/map/" component={PageMap} />
          <PrivateRoute path="/profile/" component={PageProfileWithAuth} />
          <PrivateRoute path="/profile-success/" component={PageProfileSuccess} />

          <Redirect to="/login/" component={PageLoginWithAuth} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
