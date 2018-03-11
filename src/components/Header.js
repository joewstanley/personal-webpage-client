import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="name">JOE STANLEY</div>
        <div className="icons">
          <a href="https://www.github.com/jstanley2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github icon"></i>
          </a>
          &nbsp;&nbsp;
          <a href="https://codepen.io/jstanley2/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-codepen icon"></i>
          </a>
          &nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/joseph-stanley-93b290159/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin icon"></i>
          </a>
          &nbsp;&nbsp;
          <a href="https://jsfiddle.net/user/jstanley2/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-jsfiddle icon"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
