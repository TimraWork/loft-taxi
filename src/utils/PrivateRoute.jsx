import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

import {logIn} from '../redux/actions';

export let PrivateRoute = (props) => {
  const {component: Component, isLoggedIn, ...rest} = props;
  return (
    <Route
      {...rest}
      render={(routeProps) => (isLoggedIn || localStorage.getItem('state') ? <Component {...routeProps} /> : <Redirect to="/login/" />)}
    />
  );
};
PrivateRoute = connect((state) => ({isLoggedIn: state.auth.isLoggedIn}), {logIn})(PrivateRoute);
