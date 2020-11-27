import React, {Component} from 'react';
import Profile from './Profile';
import ProfileSuccess from './ProfileSuccess';

class PageProfile extends Component {
  state = {
    status: '',
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      status: 'success',
    });
  };

  render() {
    const {status} = this.state;
    return (
      <div className="center_block bg--cover">
        <div className="white_container  w--880">
          {status === 'success' ? <ProfileSuccess /> : <Profile handleFormSubmit={this.handleFormSubmit} />}
        </div>
      </div>
    );
  }
}

export default PageProfile;
