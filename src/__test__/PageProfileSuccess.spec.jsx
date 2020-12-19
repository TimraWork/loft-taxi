import React from 'react';
import {ProfileSuccess} from '../components/ProfileSuccess.jsx';
import {render} from '@testing-library/react';

describe('PageProfileSuccess', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<ProfileSuccess />);
    const button = getByTestId('ok-button');
    expect(button.innerHTML).toMatch('Перейти на карту');
  });
});
