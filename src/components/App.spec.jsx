import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

jest.mock('./PageMap', () => ({PageMap: () => <div>PageMap component</div>}));
jest.mock('./PageProfile', () => ({PageProfile: () => <div>PageProfile component</div>}));
jest.mock('./PageLogin', () => ({PageLogin: () => <div>PageLogin component</div>}));

describe('App', () => {
  it('renders correctly', () => {
    const {container} = render(<App />);
    expect(container.innerHTML).toMatch('PageLogin component');
  });
});
