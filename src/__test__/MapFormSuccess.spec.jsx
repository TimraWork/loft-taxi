import React from 'react';
import {MapFormSuccess} from '../components/MapFormSuccess.jsx';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe('MapFormSuccess', () => {
  it('renders correctly', () => {
    const history = createMemoryHistory();
    const {getByTestId} = render(
      <Router history={history}>
        <MapFormSuccess />
      </Router>
    );
    const button = getByTestId('ok-button');
    expect(button.innerHTML).toMatch('Сделать новый заказ');
  });
});
