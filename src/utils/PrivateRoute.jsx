import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export let PrivateRoute = (props) => {
  const {component: Component, isLoggedIn, ...rest} = props;
  return <Route {...rest} render={(routeProps) => (isLoggedIn ? <Component {...routeProps} /> : <Redirect to="/login/" />)} />;
};
PrivateRoute = connect((state) => ({isLoggedIn: state.auth.isLoggedIn}))(PrivateRoute);
