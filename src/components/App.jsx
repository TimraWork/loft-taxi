import React, { Component } from "react";

import Header from "./Header";

import PageMap from "./PageMap";
import PageLogin from "./PageLogin";
import PageProfile from "./PageProfile";
import { navUrl as navPath } from "./Nav";
import { authHOC } from "./hoc/AuthContext";

let REDIRECT_URL = navPath.PROFILE.path;

class App extends Component {
  state = {
    navUrl: REDIRECT_URL,
  };

  handleNavClick = (e, navUrl) => {
    e.preventDefault();
    if (navUrl === navPath.LOGOUT.path) {
      this.props.logout();
    }
    this.setState({
      navUrl: navUrl,
    });
  };

  handleFormSubmit = (e) => {
    console.log("isLoggedIn = ", this.props.isLoggedIn);

    e.preventDefault();
    const { email, password } = e.target;
    console.log("🚀 ~ file: App.jsx ~ line 33 ~ App ~ email, password", email.value, password.value);
    if (email.value === "test@test.com" && password.value === "123") {
      this.props.login();
      REDIRECT_URL = navPath.MAP.path;
      this.setState({
        navUrl: REDIRECT_URL,
      });
    }
  };

  render() {
    const { navUrl } = this.state;

    const pagesWithoutHeader = new Set([navPath.LOGOUT.path]);
    const layoutWithoutHeader = pagesWithoutHeader.has(navUrl) ? " layout--without_header" : "";

    return (
      <div className={"layout" + layoutWithoutHeader}>
        <Header handleNavClick={this.handleNavClick} navUrl={navUrl} />
        <main className="main">
          {navUrl === navPath.MAP.path && <PageMap />}
          {navUrl === navPath.PROFILE.path && <PageProfile handleFormSubmit={this.handleFormSubmit} />}
          {navUrl === navPath.LOGOUT.path && <PageLogin handleFormSubmit={this.handleFormSubmit} />}
        </main>
      </div>
    );
  }
}

export default authHOC(App);
