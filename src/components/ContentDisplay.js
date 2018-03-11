import React, { Component } from 'react';
import ErrorContent from './contents/ErrorContent';
import HelpContent from './contents/HelpContent';
import AboutContent from './contents/AboutContent';
import SkillsContent from './contents/SkillsContent';
import WorkContent from './contents/WorkContent';
import ProjectsContent from './contents/ProjectsContent';
import ContactContent from './contents/ContactContent';

const PAGES = [<ErrorContent />, <HelpContent />, <AboutContent />, <SkillsContent />, <WorkContent />, <ProjectsContent />, <ContactContent />];

class ContentDisplay extends Component {
  render() {
    let command;
    if (this.props.page === 0) {
      command = <div className="display error">command:&nbsp;{this.props.prev}<br /><br /></div>;
    }

    return (
      <div className="contents">
        <span>{command}</span>
        {PAGES[this.props.page]}
      </div>
    );
  }
}

export default ContentDisplay;
