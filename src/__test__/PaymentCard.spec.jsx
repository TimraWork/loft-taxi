import React from 'react';
import {PaymentCard} from '../components/PaymentCard.jsx';
import {render} from '@testing-library/react';

describe('PaymentCard', () => {
  it('renders correctly', () => {
    const props = {
      number: '',
      expiration: ''
    };
    const {container} = render(<PaymentCard {...props} />);
    expect(container.innerHTML).toMatch(props.number);
    expect(container.innerHTML).toMatch(props.expiration);
  });
});
