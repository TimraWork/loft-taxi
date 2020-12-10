import React from 'react';
import {Route, Switch, Redirect, useLocation} from 'react-router-dom';

import {Header} from './Header';

import {Map} from '../components/Мap';
import {LoginWithAuth} from '../containers/Login';
import {ProfileWithAuth} from '../containers/Profile';
import {ProfileSuccess} from '../components/ProfileSuccess';
import {RegistrationWithAuth} from '../containers/Registration';

import {connect} from 'react-redux';
import {logIn} from '../redux/actions';
import {store} from '../redux/store';

import {PrivateRoute} from '../utils/PrivateRoute';

export const App = () => {
  // if (localStorage.getItem('state')) {
  //   store.dispatch(logIn('true', JSON.parse(localStorage.getItem('state')).auth.profile));
  // }
  // store.dispatch(logIn());
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

          <PrivateRoute path="/map/" component={Map} />
          <PrivateRoute path="/profile/" component={ProfileWithAuth} />
          <PrivateRoute path="/profile-success/" component={ProfileSuccess} />

          <Redirect to="/login/" component={LoginWithAuth} />
        </Switch>
      </main>
    </div>
  );
};

// export default AppWithAuth = connect(null, {logIn})(App);
