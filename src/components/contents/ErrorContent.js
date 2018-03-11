import React, { Component } from 'react';

class ErrorContent extends Component {
  render() {
    return (
      <div className="display error">
        <hr />
        <p className="center">UNKNOWN COMMAND</p>
        <hr />
        <br />
        <div className="center">
          <i className="fas fa-exclamation-circle content-icon"></i>
          <br /><br />
          <p>The entered command could not be resolved</p>
          <p>Use the help command for a list of valid commands</p>
        </div>
      </div>
    );
  }
}

export default ErrorContent;
