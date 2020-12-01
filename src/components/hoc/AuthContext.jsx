import React, {Component} from 'react';

const AuthContext = React.createContext();
const {Provider, Consumer: AuthConsumer} = AuthContext;

const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = (email, password) => {
    if (email !== 'test@test.com' || password !== '123') {
      return;
    }
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return <Provider value={{login, logout, isLoggedIn}}>{children}</Provider>;
};

const withAuth = (WrappedComponent) => {
  return class extends Component {
    static displayName = 'authHOC';

    render() {
      return <AuthConsumer>{(contextProps) => <WrappedComponent {...contextProps} {...this.props} />}</AuthConsumer>;
    }
  };
};

export {AuthContext, AuthProvider, withAuth};
