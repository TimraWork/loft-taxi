import React from 'react';
import ReactDOM from 'react-dom';

import {theme} from './theme';
import {MuiThemeProvider} from '@material-ui/core/styles';
import './assets/style/main.scss';

import App from './components/App';
import {AuthProvider} from './components/hoc/AuthContext';
import {CssBaseline} from '@material-ui/core';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AuthProvider>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
