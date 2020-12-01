import React from 'react';
import {render, screen} from '@testing-library/react';
import {Nav} from './Nav';

describe('Nav', () => {
  it('renders correctly', () => {
    const {container} = render(<Nav />);

    expect(container.innerHTML).toMatch('Карта');
    expect(screen.getByTitle(/map/i)).toBeTruthy();

    expect(container.innerHTML).toMatch('Профиль');
    expect(screen.getByTitle(/profile/i)).toBeTruthy();

    expect(container.innerHTML).toMatch('Выйти');
    expect(screen.getByTitle(/logout/i)).toBeTruthy();
  });
});
