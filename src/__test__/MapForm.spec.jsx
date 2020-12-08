import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import '../setupTests';

import {MapForm} from '../components/MapForm';

describe('MapForm', () => {
  let wrapper;
  it('renders correctly', () => {
    wrapper = shallow(<MapForm />);
    expect(wrapper.find('#from')).toHaveLength(1);
    expect(wrapper.find('#to')).toHaveLength(1);
    expect(wrapper.find('#order-button')).toHaveLength(1);
  });
});
