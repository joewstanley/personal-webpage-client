import React, { Component } from 'react';

class SkillsTable extends Component {
  constructor(props) {
    super(props);

    this.getHeaders = this.getHeaders.bind(this);
    this.getRows = this.getRows.bind(this);
    this.getRow = this.getRow.bind(this);
  }

  getHeaders(skills) {
    return <tr>{skills.map((skill, i) => <th className="skills-header" key={i}>{skill.header}</th>)}</tr>;
  }

  getRows(skills, count) {
    let rows = [];
    for (let i = 0 ; i < count ; i++) {
      rows.push(this.getRow(skills, i));
    }
    return rows;
  }

  getRow(skills, index) {
    return <tr key={index}>{skills.map((skill, i) => <td key={i}>{skill.list[index]}</td>)}</tr>;
  }

  render() {
    return (
      <table className="skills-table">
        <tbody>
          {this.getHeaders(this.props.skills)}
          {this.getRows(this.props.skills, this.props.count)}
        </tbody>
      </table>
    );
  }
}

export default SkillsTable;
