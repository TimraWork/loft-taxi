import {Alert} from '@material-ui/core';
import React, {Component} from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert className="server_error" severity="error">
          Ошибка рендера компонента
        </Alert>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
