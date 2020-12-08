import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {NAVIGATION_ITEMS, Nav} from '../components/Nav';
import {createMemoryHistory} from 'history';

describe('Nav', () => {
  it('renders correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history={history}>
        <Nav />
      </Router>
    );

    NAVIGATION_ITEMS.map((item) => expect(getByText(`${item.name}`).closest('a').pathname).toBe(`${item.path}`));
  });
});
