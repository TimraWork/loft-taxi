import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import '../setupTests';

import {Profile} from './Profile';

describe('Profile', () => {
  let wrapper;
  it('renders correctly', () => {
    wrapper = shallow(<Profile />);
    expect(wrapper.find('#name').prop('name')).toEqual('name');
    expect(wrapper.find('#number').prop('name')).toEqual('number');
    expect(wrapper.find('#expiration').prop('name')).toEqual('expiration');
    expect(wrapper.find('#cvc').prop('name')).toEqual('cvc');

    expect(wrapper.find('#save-button')).toHaveLength(1);
  });
});
