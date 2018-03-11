import React, { Component } from 'react';
import ContentDisplay from './ContentDisplay';
import Links from './Links';

const WELCOME = "Welcome to my website";
const HELP = "Here's some navigation help...";

const COMMANDS = ["help", "about", "skills", "work", "projects", "contact"];

const ENTER = 13;

class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: false,
      loc: "/home/joe/welcome",
      dir: ">",
      cmd: "",
      page: -1,
      animate: false
    };

    this.keyStrings = this.keyStrings.bind(this);
    this.clearKeyedString = this.clearKeyedString.bind(this);
    this.clearCommand = this.clearCommand.bind(this);

    this.toggleLinks = this.toggleLinks.bind(this);
    this.linksDisplay = this.linksDisplay.bind(this);

    this.handleLink = this.handleLink.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.clickGreenDot = this.clickGreenDot.bind(this);
    this.clickYellowDot = this.clickYellowDot.bind(this);
    this.clickRedDot = this.clickRedDot.bind(this);
  }

  componentDidMount() {
    this.setState({animate: true});
    setTimeout(() => this.keyStrings([WELCOME, HELP, COMMANDS[0]], 0, 0, false), 1000);
  }

  keyStrings(list, count, index, cmd) {
    if (index < list[count].length) {
      this.setState({cmd: list[count].slice(0, index + 1)});
      setTimeout(() => this.keyStrings(list, count, index + 1, cmd), 100);
    } else if (cmd) {
      setTimeout(() => this.runCommand(), 1000);
    } else {
      setTimeout(() => this.clearKeyedString(list, count + 1), 1000);
    }
  }

  clearKeyedString(list, count) {
    this.clearCommand();
    if (count === list.length - 1) {
      setTimeout(() => this.keyStrings(list, count, 0, true), 100);
    } else if (count < list.length) {
      setTimeout(() => this.keyStrings(list, count, 0, false), 100);
    }
  }

  clearCommand() {
    this.setState({cmd: ""});
  }

  runCommand() {
    let cmd = this.state.cmd.trim().toLowerCase();
    this.clearCommand();

    if (COMMANDS.includes(cmd)) {
      this.setState({loc: '/home/joe/' + cmd, prev: cmd, page: COMMANDS.indexOf(cmd) + 1, animate: false});
    } else if (cmd === "resume") {
      let win = window.open("/doc/resume.pdf");
      if (win) {
        win.opener = null;
        win.focus();
      }
    } else if (cmd === "links") {
      this.toggleLinks();
    } else if (cmd !== "") {
      this.setState({loc: '/home/joe/error', prev: cmd, page: COMMANDS.indexOf(cmd) + 1, animate: false});
    }
  }

  toggleLinks() {
    this.setState({links: !this.state.links});
  }

  linksDisplay() {
    if (this.state.links) {
      return (<div><Links handleLink={this.handleLink} /></div>);
    }
  }

  handleLink(event) {
    if (!this.state.animate) {
      this.setState({animate: true});
      let cmd = event.target.innerHTML.toLowerCase();
      this.keyStrings([cmd], 0, 0, true);
    }
  }

  handleKey(event) {
    if (this.state.animate) {
      event.preventDefault();
    } else if (event.keyCode && event.keyCode === ENTER) {
      event.preventDefault();
      this.runCommand();
    }
  }

  handleChange(event) {
    if (event.target.value.includes("\n")) {
      this.clearCommand();
    } else {
      this.setState({cmd: event.target.value});
    }
  }

  clickGreenDot() {
    this.setState({links: true});
  }

  clickYellowDot() {
    this.setState({links: false});
  }

  clickRedDot() {
    if (!this.state.animate) {
      this.setState({animate: true});
      this.keyStrings(["help"], 0, 0, true);
    }
  }

  render() {
    return (
      <div className="terminal">
        {this.linksDisplay()}
        <div className="bar">
          <div className="dots">
            <span className="dot" onClick={this.clickRedDot}>
              <i className="fas fa-circle red"></i>
            </span>
            &nbsp;&nbsp;
            <span className="dot" onClick={this.clickYellowDot}>
              <i className="fas fa-circle yellow"></i>
            </span>
            &nbsp;&nbsp;
            <span className="dot" onClick={this.clickGreenDot}>
              <i className="fas fa-circle green"></i>
            </span>
          </div>
          <div className="loc">{this.state.loc}</div>
          <div className="question">
            <span onClick={this.props.toggleModal}>
              <i className="fas fa-question-circle question-icon"></i>
            </span>
          </div>
        </div>
        <div className="box">
          <textarea className="cmd" rows="1" cols="1" disabled="disabled" readOnly="readonly" value ={this.state.dir} />
          <textarea className="cmd" rows="1" cols="35" maxLength="35" autoFocus="autofocus" autoComplete="off" autoCorrect="off" spellCheck="false" value={this.state.cmd} onChange={this.handleChange} onKeyDown={this.handleKey} />
          <div className="spacer"></div>
          <ContentDisplay prev={this.state.prev} page={this.state.page} />
        </div>
      </div>
    );
  }
}

export default Terminal;
