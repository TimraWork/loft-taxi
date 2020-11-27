import React, {Component} from 'react';

const authContext = React.createContext();
const {Provider, Consumer: AuthConsumer} = authContext;

class AuthProvider extends Component {
  state = {
    isLoggedIn: false,
  };

  login = () => {
    this.setState({isLoggedIn: true});
  };

  logout = () => {
    this.setState({isLoggedIn: false});
  };

  render() {
    const {children} = this.props;
    const {isLoggedIn} = this.state;
    return <Provider value={{login: this.login, logout: this.logout, isLoggedIn}}>{children}</Provider>;
  }
}

const authHOC = (WrappedComponent) => {
  return class extends Component {
    static displayName = 'authHOC';

    render() {
      return <AuthConsumer>{(contextProps) => <WrappedComponent {...contextProps} {...this.props}></WrappedComponent>}</AuthConsumer>;
    }
  };
};

export {authContext, AuthProvider, authHOC};
