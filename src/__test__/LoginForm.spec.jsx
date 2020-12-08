import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

import {LoginForm} from '../components/LoginForm';

describe('LoginForm', () => {
  let wrapper;
  it('renders correctly', () => {
    wrapper = shallow(<LoginForm />);
    expect(wrapper.find('#email').prop('name')).toEqual('email');
    expect(wrapper.find('#password').prop('name')).toEqual('password');
    expect(wrapper.find('#password').prop('name')).toEqual('password');

    expect(wrapper.find('#login-button')).toHaveLength(1);
    expect(wrapper.find('#registration-link')).toHaveLength(1);
  });
});
