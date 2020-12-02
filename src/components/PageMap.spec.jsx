import React from 'react';
import {render} from '@testing-library/react';
import {PageMap} from './PageMap';

jest.mock('./Map', () => ({Map: () => <div>Map component</div>}));
jest.mock('./MapForm', () => ({MapForm: () => <div>MapForm component</div>}));

describe('PageMap', () => {
  it('renders correctly', () => {
    const {container} = render(<PageMap />);
    expect(container.innerHTML).toMatch('Map component');
    expect(container.innerHTML).toMatch('MapForm component');
  });
});
