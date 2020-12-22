import React from 'react';
import {act, render} from '@testing-library/react';
import {ProfileWithAuth} from '../containers/Profile';

jest.mock('react-redux', () => ({connect: () => (Component) => Component}));

describe('Profile', () => {
  let queries;
  it('sets "profile.error" has value render ProfileForm and Alert with error content', async () => {
    const props = {
      profile: {error: 'ERROR FOUND!'},
      token: '123',
      editProfile: jest.fn()
    };

    await act(async () => {
      queries = render(<ProfileWithAuth {...props} />);
    });
    let {container} = queries;

    expect(container.innerHTML).toMatch('Профиль');
    expect(container.innerHTML).toMatch('ERROR FOUND!');
  });

  it('sets "profile" without error render only ProfileForm', async () => {
    const props = {
      profile: {},
      token: '123',
      editProfile: jest.fn()
    };

    await act(async () => {
      queries = render(<ProfileWithAuth {...props} />);
    });

    let {container} = queries;
    expect(container.innerHTML).toMatch('Профиль');
    expect(container.innerHTML).not.toMatch('ERROR FOUND!');
  });
});
