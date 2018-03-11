import React, { Component } from 'react';

class WorkTable extends Component {
  constructor(props) {
    super(props);
    this.workInfo = this.workInfo.bind(this);
  }

  workInfo(info) {
    return info.map((str, i) => <li key={i}>{str}</li>);
  }

  render() {
    return (
      <table className="work-table">
        <tbody>
          <tr>
            <td className="work-company">
              <a href={this.props.job.website} target="_blank">{this.props.job.company}</a>
            </td>
            <td className="work-date">{this.props.job.date}</td>
          </tr>
          <tr>
            <td className="work-title" colSpan="2">{this.props.job.title}</td>
          </tr>
          <tr>
            <td className="work-info" colSpan="2">
              <ul>
                {this.workInfo(this.props.job.info)}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default WorkTable;
