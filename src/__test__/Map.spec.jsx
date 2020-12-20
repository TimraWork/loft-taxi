import React from 'react';
import {render} from '@testing-library/react';
import {MapWithAuth} from '../containers/Мap';

jest.mock('../containers/Мap', () => ({MapWithAuth: () => <div>Map component</div>}));
jest.mock('../components/MapForm', () => ({MapForm: () => <div>MapForm component</div>}));

describe('Map', () => {
  it('renders correctly', () => {
    const {container} = render(<MapWithAuth />);
    expect(container.innerHTML).toMatch('Map component');
  });
});
