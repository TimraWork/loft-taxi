import React from 'react';
import PaymentCard from '../components/PaymentCard.jsx';
import {render} from '@testing-library/react';

describe('PaymentCard', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<PaymentCard />);
    expect(getByTestId('expiration')).toBeTruthy();
    expect(getByTestId('number')).toBeTruthy();
  });
});
