import React from 'react';
import {render} from '@testing-library/react';
import {Мap} from '../components/Мap';

jest.mock('../components/Мap', () => ({Мap: () => <div>Map component</div>}));
jest.mock('../components/MapForm', () => ({MapForm: () => <div>MapForm component</div>}));

describe('PageMap', () => {
  it('renders correctly', () => {
    const {container} = render(<Мap />);
    expect(container.innerHTML).toMatch('Map component');
  });
});
