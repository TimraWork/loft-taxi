import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import '../setupTests';

import {ProfileForm} from '../components/ProfileForm';

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
    const wrapper = shallow(<ProfileForm {...props} />);
    expect(wrapper.find('[name="name"]')).toHaveLength(1);
    expect(wrapper.find('[name="number"]')).toHaveLength(1);
    expect(wrapper.find('[name="expiration"]')).toHaveLength(1);
    expect(wrapper.find('[name="cvc"]')).toHaveLength(1);
    expect(wrapper.find('#save-button')).toHaveLength(1);
  });
});
