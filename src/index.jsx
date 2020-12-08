import React from 'react';
import ReactDOM from 'react-dom';

import {MuiThemeProvider} from '@material-ui/core/styles';
import './assets/style/main.scss';

import {App} from './components/App';
import {CssBaseline} from '@material-ui/core';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {store} from './redux/store';
import {theme} from './theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
