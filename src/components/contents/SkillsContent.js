import React, { Component } from 'react';
import SkillsTable from './SkillsTable';

class SkillsContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 7,
      skills: [
        {
          header: "Languages",
          list: [
            "Python",
            "JavaScript",
            "HTML",
            "CSS/Less",
            "Java",
            "C/C++",
            "SQL"
          ]
        },
        {
          header: "Frameworks",
          list: [
            "Express",
            "React",
            "Django",
            "Flask",
            "Vue.js",
            "JSF",
            "Bootstrap"
          ]
        },
        {
          header: "Tools",
          list: [
            "Git",
            "Bash",
            "IBM Cloud",
            "MongoDB",
            "MySQL",
            "Eclipse",
            "GIMP"
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div className="display skills">
        <div>command:&nbsp;skills<br /><br /></div>
        <hr />
        <p className="center">TECHNICAL SKILLS</p>
        <hr />
        <br />
        <SkillsTable count={this.state.count} skills={this.state.skills} />
      </div>
    );
  }
}

export default SkillsContent;
