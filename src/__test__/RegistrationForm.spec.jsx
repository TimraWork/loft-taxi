import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

import {RegistrationForm} from '../components/RegistrationForm';

describe('Profile', () => {
  it('renders correctly', () => {
    const props = {
      number: '',
      expiration: '',
      errors: {},
      handleSubmit: jest.fn(),
      formState: {
        errors: {}
      }
    };
    const wrapper = shallow(<RegistrationForm {...props} />);
    expect(wrapper.find('[name="email"]')).toHaveLength(1);
    expect(wrapper.find('[name="name"]')).toHaveLength(1);
    expect(wrapper.find('[name="surname"]')).toHaveLength(1);
    expect(wrapper.find('[name="password"]')).toHaveLength(1);
    expect(wrapper.find('#login-button')).toHaveLength(1);
  });
});
