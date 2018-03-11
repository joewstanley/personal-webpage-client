import React, { Component } from 'react';

class Links extends Component {
  render() {
    return (
      <div className="links">
        <table className="links-table">
          <tbody>
            <tr className="center">
              <td><span className="link" onClick={this.props.handleLink}>About</span></td>
              <td><span className="link" onClick={this.props.handleLink}>Skills</span></td>
              <td><span className="link" onClick={this.props.handleLink}>Work</span></td>
              <td><span className="link" onClick={this.props.handleLink}>Projects</span></td>
              <td><span className="link" onClick={this.props.handleLink}>Contact</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Links;
