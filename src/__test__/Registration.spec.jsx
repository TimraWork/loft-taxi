import React from 'react';
import {render} from '@testing-library/react';
import {RegistrationWithAuth} from '../containers/Registration';

jest.mock('../components/RegistrationForm', () => ({RegistrationForm: () => <div>RegistrationForm component</div>}));
jest.mock('react-router-dom', () => ({Redirect: () => <div>Redirect component</div>}));
jest.mock('react-redux', () => ({connect: () => (Component) => Component}));

describe('Login', () => {
  it('calls logOut func. if its changed', () => {
    const logOut = jest.fn();
    render(<RegistrationWithAuth logOut={logOut} />);
    expect(logOut).toHaveBeenCalled();
  });

  it('sets "isLoggedIn" to false render Registration component', () => {
    const props = {
      isLoggedIn: false,
      logOut: jest.fn()
    };
    const {container} = render(<RegistrationWithAuth {...props} />);
    expect(container.innerHTML).toMatch('RegistrationForm component');
  });

  it('sets "isLoggedIn" to true render Redirect', () => {
    const props = {
      isLoggedIn: true,
      logOut: jest.fn()
    };
    const {container} = render(<RegistrationWithAuth {...props} />);
    expect(container.innerHTML).toMatch('Redirect component');
  });

  it('sets "error" render LoginForm and Alert with error content', () => {
    const props = {
      error: 'ERROR FOUND! ',
      logOut: jest.fn()
    };
    const {container} = render(<RegistrationWithAuth {...props} />);
    expect(container.innerHTML).toMatch('RegistrationForm component');
    expect(container.innerHTML).toMatch('ERROR FOUND!');
  });
});
