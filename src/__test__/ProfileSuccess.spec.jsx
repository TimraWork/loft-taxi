import React from 'react';
import {ProfileSuccess} from '../components/ProfileSuccess.jsx';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe('PageProfileSuccess', () => {
  it('renders correctly', () => {
    const history = createMemoryHistory();
    const {getByTestId} = render(
      <Router history={history}>
        <ProfileSuccess />
      </Router>
    );
    const button = getByTestId('ok-button');
    expect(button.innerHTML).toMatch('Перейти на карту');
    expect(button.closest('a').pathname).toBe('/map/');
  });
});
