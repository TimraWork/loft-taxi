import React from 'react';
import {PageProfileSuccess} from '../components/pages/PageProfileSuccess.jsx';
import {render} from '@testing-library/react';

describe('PageProfileSuccess', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<PageProfileSuccess />);
    const button = getByTestId('ok-button');
    expect(button.innerHTML).toMatch('Перейти на карту');
  });
});
