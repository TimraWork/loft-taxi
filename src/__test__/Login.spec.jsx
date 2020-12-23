import React from 'react';
import {render} from '@testing-library/react';
import {LoginWithAuth} from '../containers/Login';

jest.mock('../components/LoginForm', () => ({LoginForm: () => <div>LoginForm component</div>}));
jest.mock('react-router-dom', () => ({Redirect: () => <div>Redirect component</div>}));
jest.mock('react-redux', () => ({connect: () => (Component) => Component}));

describe('Login', () => {
  it('calls logOut func. if its changed', () => {
    const logOut = jest.fn();
    render(<LoginWithAuth logOut={logOut} />);
    expect(logOut).toHaveBeenCalled();
  });

  it('sets "isLoggedIn" to false render LoginForm component', () => {
    const props = {
      isLoggedIn: false,
      logOut: jest.fn()
    };
    const {container} = render(<LoginWithAuth {...props} />);
    expect(container.innerHTML).toMatch('LoginForm component');
  });

  it('sets "isLoggedIn" to true render Redirect', () => {
    const props = {
      isLoggedIn: true,
      logOut: jest.fn()
    };
    const {container} = render(<LoginWithAuth {...props} />);
    expect(container.innerHTML).toMatch('Redirect component');
  });

  it('sets "error" render LoginForm and Alert with error content', () => {
    const props = {
      error: 'ERROR FOUND! ',
      logOut: jest.fn()
    };
    const {container} = render(<LoginWithAuth {...props} />);
    expect(container.innerHTML).toMatch('LoginForm component');
    expect(container.innerHTML).toMatch('ERROR FOUND!');
  });
});
