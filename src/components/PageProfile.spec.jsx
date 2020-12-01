import React from 'react';
import {AuthProvider, AuthContext} from './hoc/AuthContext';
import {render} from '@testing-library/react';
import {act} from 'react-dom/test-utils';

import {PageProfile} from './PageProfile';

describe('AuthContext', () => {
  describe('#login', () => {
    it("sets 'isLoggedIn' to false ", () => {
      let isLoggedIn;
      let login;
      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              login = value.login;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      act(() => {
        login('test@test.com', '123');
      });
      expect(isLoggedIn).toBe(true);
    });
  });
});
