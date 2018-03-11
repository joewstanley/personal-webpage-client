import React, { Component } from 'react';

class LockedContent extends Component {
  render() {
    return (
      <div className="display locked">
        <div>command:&nbsp;{this.props.cmd}<br /><br /></div>
        <hr />
        <p className="center">CURRENTLY UNAVAILABLE</p>
        <hr />
        <br />
        <div className="center">
          <i className="fas fa-lock content-icon"></i>
          <br /><br />
          <span>Locked Content</span>
        </div>
      </div>
    );
  }
}

export default LockedContent;
