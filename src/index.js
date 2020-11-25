import React from 'react';
import ReactDOM from 'react-dom';

import {theme} from 'loft-taxi-mui-theme';
import {MuiThemeProvider} from '@material-ui/core/styles';
import './assets/style/main.scss';

import App from './components/App';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
