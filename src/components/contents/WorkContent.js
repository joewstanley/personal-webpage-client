import React, { Component } from 'react';
import WorkTable from './WorkTable';

class WorkContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: [
        {
          company: "NC State University",
          website: "https://tutorial.dasa.ncsu.edu/",
          date: "Aug 2015 - Present",
          title: "University Tutor",
          info: [
            "Tutored students in the subjects of calculus, physics, and chemistry",
            "Collaborated as teams of 3-5 tutors in group tutoring environment",
            "Improved student test scores through effective study techniques",
            "Developed strong communication and time management skills"
          ]
        },
        {
          company: "Thomas Built Buses",
          website: "https://thomasbuiltbuses.com/",
          date: "June - Aug 2016",
          title: "Planner & Scheduler",
          info: [
            "Managed part inventories and shipment information",
            "Contacted suppliers in relation to part arrival times and delays",
            "Updated contact information for current suppliers",
            "Created updated contact spreadsheet using Microsoft Excel and Visual Basic"
          ]
        },
        {
          company: "Thomas Built Buses",
          website: "https://thomasbuiltbuses.com/",
          date: "June - Aug 2015",
          title: "Engineering Intern",
          info: [
            "Troubleshot software and hardware issues for employees",
            "Trained staff on how to use specific applications",
            "Recorded part information and quantities in database",
            "Communicated with peers on outstanding and unfinished tasks"
          ]
        }
      ]
    };
  }

  createWorkTable(exp) {
    return exp.map((obj, i) => <div key={i}><WorkTable job={obj} /><br /></div>);
  }

  render() {
    return (
      <div className="display work">
        <div>command:&nbsp;work<br /><br /></div>
        <hr />
        <p className="center">Work Experience</p>
        <hr />
        <br />
        {this.createWorkTable(this.state.experience)}
        <div className="center">
          <a href="/doc/resume.pdf" target="_blank" rel="noopener noreferrer"><i className="fas fa-download"></i>&nbsp;View My Resume</a>
        </div>
        <br />
      </div>
    );
  }
}

export default WorkContent;
