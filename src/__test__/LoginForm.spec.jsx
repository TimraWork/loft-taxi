import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

import {LoginForm} from '../components/LoginForm';

describe('LoginForm', () => {
  let wrapper;
  it('renders correctly', () => {
    wrapper = shallow(<LoginForm />);
    expect(wrapper.find('[name="email"]')).toHaveLength(1);
    expect(wrapper.find('[name="password"]')).toHaveLength(1);

    expect(wrapper.find('#login-button')).toHaveLength(1);
    expect(wrapper.find('#registration-link')).toHaveLength(1);
  });
});
