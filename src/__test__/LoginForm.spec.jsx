import React from 'react';
import {shallow} from 'enzyme';

import {LoginForm} from '../components/LoginForm';

jest.mock('react-redux', () => ({connect: () => (Component) => Component}));

describe('LoginForm', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('[name="email"]')).toHaveLength(1);
    expect(wrapper.find('[name="password"]')).toHaveLength(1);
    expect(wrapper.find('#login-button')).toHaveLength(1);
    expect(wrapper.find('#registration-link')).toHaveLength(1);
  });
});
