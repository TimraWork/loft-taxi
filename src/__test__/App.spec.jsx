import React from 'react';
import {render} from '@testing-library/react';
import App from '../components/App';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

jest.mock('./pages/PageMap', () => ({PageMap: () => <div>PageMap component</div>}));
jest.mock('./pages/PageLogin', () => ({PageLoginWithAuth: () => <div>PageLoginWithAuth component</div>}));

describe('App', () => {
  it('renders correctly', () => {
    const mockStore = {
      getState: () => ({auth: {isLoggedIn: false}}),
      subscribe: () => {},
      dispatch: () => {}
    };

    const history = createMemoryHistory();

    const {container, debug} = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </Router>
    );
    debug();
    expect(container.innerHTML).toMatch('PageLoginWithAuth component');
  });
});
