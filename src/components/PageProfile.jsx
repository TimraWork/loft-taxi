import React, {Component} from 'react';
import Profile from './Profile';
import ProfileSuccess from './ProfileSuccess';

export class PageProfile extends Component {
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
      <div className="center_block bg--cover">{status === 'success' ? <ProfileSuccess /> : <Profile handleFormSubmit={this.handleFormSubmit} />}</div>
    );
  }
}
