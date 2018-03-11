import React, { Component } from 'react';

class HelpContent extends Component {
  render() {
    return (
      <div className="display help">
        <div>command:&nbsp;help<br /><br /></div>
        <hr />
        <p className="center">COMMAND LIST</p>
        <hr />
        <br />
        <table className="help-table">
          <tbody>
            <tr>
              <td>help</td>
              <td>lists commands for page navigation</td>
            </tr>
            <tr>
              <td>about</td>
              <td>general information related to interests and education</td>
            </tr>
            <tr>
              <td>skills</td>
              <td>displays most used languages, frameworks, and tools</td>
            </tr>
            <tr>
              <td>work</td>
              <td>shows objective and work experience</td>
            </tr>
            <tr>
              <td>projects</td>
              <td>provides links for academic and personal projects</td>
            </tr>
            <tr>
              <td>contact</td>
              <td>ways to get in touch</td>
            </tr>
            <tr>
              <td>resume</td>
              <td>opens PDF copy of resume in new tab</td>
            </tr>
            <tr>
              <td>links</td>
              <td>toggle physical links for commands</td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>For more information, click the question mark icon in the status bar</p>
      </div>
    );
  }
}

export default HelpContent;
