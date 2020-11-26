import React from 'react';
import ReactDOM from 'react-dom';

import {theme} from 'loft-taxi-mui-theme';
import {MuiThemeProvider} from '@material-ui/core/styles';
import './assets/style/main.scss';

import App from './components/App';
import {AuthProvider} from './components/hoc/AuthContext';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
