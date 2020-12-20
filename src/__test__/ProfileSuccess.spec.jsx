import React from 'react';
import {ProfileSuccess} from '../components/ProfileSuccess.jsx';
import {render} from '@testing-library/react';

describe('PageProfileSuccess', () => {
  it('renders correctly', () => {
    const {getByTestId /* , debug */} = render(<ProfileSuccess />);
    const button = getByTestId('ok-button');
    // debug();
    expect(button.innerHTML).toMatch('Перейти на карту');
    expect(button.closest('a').pathname).toBe('/map/');
  });
});
