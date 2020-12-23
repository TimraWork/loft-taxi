import React from 'react';
import {MapProfile} from '../components/MapProfile.jsx';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe('MapProfile', () => {
  it('renders correctly', () => {
    const history = createMemoryHistory();
    const {getByTestId} = render(
      <Router history={history}>
        <MapProfile />
      </Router>
    );
    const button = getByTestId('ok-button');
    expect(button.innerHTML).toMatch('Перейти в профиль');
    expect(button.closest('a').pathname).toBe('/profile/');
  });
});
