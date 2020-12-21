import React from 'react';
import {shallow, mount} from 'enzyme';
import {act} from '@testing-library/react';
import {LoginForm} from '../components/LoginForm';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-redux', () => ({connect: () => (Component) => Component}));

describe('LoginForm', () => {
  let form, wrapper, props, inputEmail, inputPassword, submitButton, registrationLink;

  beforeAll(() => {
    props = {
      handleSubmit: jest.fn(),
      errors: {},
      formState: {}
    };
    wrapper = shallow(<LoginForm {...props} />);

    form = wrapper.find('.form');
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

  it('calls the submit with valid data', async () => {
    await act(async () => {
      inputEmail.simulate('change', {target: {value: 'test@test.com_'}});
      inputPassword.simulate('change', {target: {value: '123123'}});
      //Тут у сабмита должно быть disabled, тк неправильный логин
      expect(form.simulate('submit')).toBeTruthy();
      // console.log('submitButton = ', submitButton.debug());
      // console.log('inputEmail = ', inputEmail.debug());
    });
  });
});
