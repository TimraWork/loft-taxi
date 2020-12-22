import React from 'react';
import {act, render} from '@testing-library/react';
import {MapWithAuth} from '../containers/Мap';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';

jest.mock('../containers/MapBoxGL', () => ({MapBoxGL: () => <div>MapBoxGL component</div>}));
jest.mock('../components/MapProfile', () => ({MapProfile: () => <div>MapProfile component</div>}));
jest.mock('../components/MapForm', () => ({MapForm: () => <div>MapForm component</div>}));
jest.mock('react-redux', () => ({connect: () => (Component) => Component}));

describe('Map', () => {
  let queries;
  it('sets "profile" has no value render MapBoxGL and MapForm components', async () => {
    const props = {
      profile: {data: 'test data'},
      addressList: [],
      getAddressList: jest.fn(),
      getRoute: jest.fn()
    };
    const history = createMemoryHistory();

    await act(async () => {
      queries = render(
        <Router history={history}>
          <MapWithAuth {...props} />
        </Router>
      );
    });
    let {container} = queries;
    expect(container.innerHTML).toMatch('MapBoxGL component');
    expect(container.innerHTML).toMatch('MapForm component');
  });

  it('sets "profile" has value render MapBoxGL and MapForm components', async () => {
    const props = {
      profile: {},
      addressList: [],
      getAddressList: jest.fn(),
      getRoute: jest.fn()
    };
    const history = createMemoryHistory();

    await act(async () => {
      queries = render(
        <Router history={history}>
          <MapWithAuth {...props} />
        </Router>
      );
    });
    let {container} = queries;
    expect(container.innerHTML).toMatch('MapBoxGL component');
    expect(container.innerHTML).toMatch('MapProfile component');
  });
});
