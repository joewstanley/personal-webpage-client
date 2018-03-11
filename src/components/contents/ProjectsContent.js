import React, { Component } from 'react';
import ProjectTable from './ProjectTable';

class ProjectsContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: "Personal Webpage v1",
          img: "/img/proj/personal_v1.png",
          url: "/v1",
          info: "My first personal webpage was a simple, single-page application. I wanted to avoid using any additional frameworks, such as Bootstrap, Materialize, or Semantic UI. The project was a great way for me to get comfortable with responsive webpage design through CSS and media queries.",
          tools: [
            "HTML",
            "CSS",
            "Less",
            "JavaScript",
            "jQuery"
          ]
        },
        {
          name: "Personal Webpage v2",
          img: "/img/proj/personal_v2.png",
          url: "/",
          info: "I used my second personal webpage as an introduction to React.js and JSX. I tried to make my website more interactive, choosing to create a command-line interface for navigation between different components. Styles were added using Less and compiling to CSS.",
          tools: [
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "Less"
          ]
        }
      ]
    }

    this.createProjectTable = this.createProjectTable.bind(this);
  }

  createProjectTable(proj) {
    return proj.map((obj, i) => <div key={i}><ProjectTable project={obj} /><br /></div>);
  }

  render() {
    return (
      <div className="display projects">
        <div className="left">command:&nbsp;projects<br /><br /></div>
        <hr />
        <p className="center">PERSONAL PROJECTS</p>
        <hr />
        <br />
        {this.createProjectTable(this.state.projects)}
        <div className="center">More coming soon...</div>
        <br />
      </div>
    );
  }
}

export default ProjectsContent;
