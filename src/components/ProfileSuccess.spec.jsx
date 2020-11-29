import React from 'react';
import {ProfileSuccess} from './ProfileSuccess.jsx';
import {render} from '@testing-library/react';

describe('ProfileSuccess', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<ProfileSuccess />);
    const button = getByTestId('ok-button');
    expect(button.innerHTML).toMatch('Перейти на карту');
  });
});
