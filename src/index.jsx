import React from 'react';
import ReactDOM from 'react-dom';

import {MuiThemeProvider} from '@material-ui/core/styles';
import './assets/style/main.scss';

import {App} from './containers/App';
import {CssBaseline} from '@material-ui/core';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';
import {theme} from './theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CssBaseline />
        <BrowserRouter basename="/loft-taxi">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
