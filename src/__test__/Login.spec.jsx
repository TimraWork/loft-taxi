import React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react';
import {Login} from '../containers/Login';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
// import userEvent from '@testing-library/user-event';

// import React from 'react';
// import {cleanup, render, screen} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// afterEach(cleanup);
// jest.mock('react-redux', () => ({connect: () => (Component) => Component}));

// test('click', () => {
//   render(
//     <div>
//       <label htmlFor="checkbox">Check</label>
//       <input id="checkbox" type="checkbox" />
//     </div>
//   );

//   userEvent.click(screen.getByText('Check'));
//   //   console.log(screen.getByLabelText('Check'));
//   expect(screen.getByLabelText('Check')).toHaveAttribute('checked', true);
// });

describe('Login', () => {
  let getByLabelText, getByRole, emailInput, passwordInput, debug, container;

  const logOut = jest.fn();
  const authenticate = jest.fn();

  beforeEach(() => {
    const history = createMemoryHistory();
    const queries = render(
      <Router history={history}>
        <Login logOut={logOut} authenticate={authenticate} />
      </Router>
    );
    getByLabelText = queries.getByLabelText;
    getByRole = queries.getByRole;
    container = queries.container;

    emailInput = getByLabelText('Email *');
    passwordInput = getByLabelText('Пароль *');
    debug = queries.debug;
  });

  describe('with valid inputs', () => {
    it('calls onSubmit', async () => {
      await act(async () => {
        fireEvent.change(emailInput, {target: {value: 'test@test.com'}});
        fireEvent.change(passwordInput, {target: {value: '123123'}});
      });

      await act(async () => {
        fireEvent.click(getByRole('button'));
      });

      //    debug();
      expect(logOut).toHaveBeenCalled();
      expect(authenticate).toHaveBeenCalled();
    });
  });

  describe('with invalid email', () => {
    it('renders email validation error', async () => {
      await act(async () => {
        fireEvent.change(emailInput, {target: {value: 'invalid'}});
        fireEvent.blur(emailInput);
      });

      //   console.log('fireEvent = ', fireEvent);
      //   console.log('emailInput = ', emailInput);
      //   debug();
      //   expect(container.innerHTML).toMatch('Электронная почта должна иметь правильный формат');
    });
  });
  describe('with invalid password', () => {
    it.todo('renders password validation error');
  });
});
