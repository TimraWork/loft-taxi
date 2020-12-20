import React from 'react';
import {PaymentCard} from '../components/PaymentCard.jsx';
import {render} from '@testing-library/react';

describe('PaymentCard', () => {
  it('renders correctly', () => {
    const props = {
      number: '',
      expiration: '',
      formState: ''
    };
    const {container} = render(<PaymentCard {...props} />);
    for (var key in props) {
      expect(container.innerHTML).toMatch(props[key]);
    }
  });
});
