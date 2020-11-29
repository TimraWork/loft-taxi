import React, {Component} from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    // if (this.state.hasError) {
    //   return <p>Error occurred!</p>;
    // }

    return this.props.children;
  }
}

export default ErrorBoundary;
