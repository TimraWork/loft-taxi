import React from 'react';
import {shallow} from 'enzyme';
import {LoginForm} from '../components/LoginForm';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-redux', () => ({connect: () => (Component) => Component}));

describe('LoginForm', () => {
  let wrapper, props, inputEmail, inputPassword, submitButton, registrationLink;

  beforeAll(() => {
    props = {
      handleSubmit: jest.fn(),
      errors: {},
      formState: {}
    };
    wrapper = shallow(<LoginForm {...props} />);

    inputEmail = wrapper.find('[name="email"]');
    inputPassword = wrapper.find('[name="password"]');
    submitButton = wrapper.find('#login-button');
    registrationLink = wrapper.find('#registration-link');
  });

  it('renders correctly', async () => {
    expect(inputEmail).toHaveLength(1);
    expect(inputPassword).toHaveLength(1);
    expect(submitButton).toHaveLength(1);
    expect(submitButton.is('[disabled]')).toBe(true);
    expect(registrationLink).toHaveLength(1);
  });
});
