import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {PageProfile} from './PageProfile';

jest.mock('./Profile', () => ({Profile: () => <div>Profile component</div>}));

describe('PageProfile', () => {
  it('renders correctly', () => {
    const {container} = render(<PageProfile />);
    expect(container.innerHTML).toMatch('Profile component');
  });
});
