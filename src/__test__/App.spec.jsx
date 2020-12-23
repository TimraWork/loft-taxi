import React from 'react';
import {render} from '@testing-library/react';
import {App} from '../containers/App';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

jest.mock('../containers/Login', () => ({LoginWithAuth: () => <div>LoginWithAuth component</div>}));
jest.mock('react-redux', () => ({connect: () => (Component) => Component}));
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({Map: () => ({})}));

describe('App', () => {
  beforeEach(() => {
    window.mapboxgl = jest.fn();
  });
  it('renders correctly', () => {
    const history = createMemoryHistory();
    history.push('/login/');
    const {container} = render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(container.innerHTML).toMatch('LoginWithAuth component');
  });
});
