import React, { Component } from 'react';

class ProjectTable extends Component {
  constructor(props) {
    super(props);
    this.toolList = this.toolList.bind(this);
  }

  toolList(tools) {
    return tools.map((str, i) => <li key={i}>{str}</li>);
  }

  render() {
    return (
      <table className="project-table">
        <tbody>
          <tr>
            <th><h1 className="project-name">{this.props.project.name}</h1></th>
          </tr>
          <tr>
            <td>
              <img className="project-img" src={this.props.project.img} alt={this.props.project.name} />
            </td>
          </tr>
          <tr>
            <td><a className="project-link" href={this.props.project.url} target="_blank" rel="noopener noreferrer">{"http://www.joestanley.tech" + this.props.project.url}</a></td>
          </tr>
          <tr>
            <td>
              <div className="project-info">{this.props.project.info}</div>
            </td>
          </tr>
          <tr>
            <td>
              <ul className="project-tools">
                {this.toolList(this.props.project.tools)}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ProjectTable;
