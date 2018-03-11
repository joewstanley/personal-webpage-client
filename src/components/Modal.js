import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-content" ref={this.props.setModalRef}>
          <span className="close" onClick={this.props.toggleModal}>
            <i className="fas fa-times"></i>
          </span>
          <p className="modal-title center">NAVIGATION</p>
          <hr />
          <br />
          <div className="center">
            <img src="/img/help/command.png" alt="Command Line" className="modal-img-norm" />
          </div>
          <p className="center">Command-Line Input</p>
          <p>
            Commands can be entered in the input box next to the greater-than
            symbol, as shown in the image above. The terminal will display
            information relevant to the command entered. A list of valid
            commands can be found by typing "help" and pressing enter, or by
            clicking the red button in the status bar of the terminal.
          </p>
          <br />
          <div className="center">
            <img src="/img/help/links.png" alt="Page Links" className="modal-img-long" />
          </div>
          <p className="center">Page Links</p>
          <p>
            Page links allow the user to navigate between pages without having
            to enter commands. These links can be made visible by entering the
            "links" command or by clicking the green and yellow buttons in the
            status bar of the terminal.
          </p>
          <br />
          <div className="center">
            <img src="/img/help/buttons.png" alt="Terminal Buttons" className="modal-img-norm" />
          </div>
          <p className="center">Terminal Buttons</p>
          <p>
            When the green terminal button is clicked, the page links are made
            visible. The yellow terminal button is used to hide visible page
            links. The red terminal button can be pressed to open the help page
            if ever a command is forgotten.
          </p>
          <br />
          <div className="center">
            <img src="/img/help/icons.png" alt="External Links" className="modal-img-norm" />
          </div>
          <p className="center">External Links</p>
          <p>
            The icons appearing below the page title link to external websites.
            The websites are as follows, from left to right: Github, CodePen,
            LinkedIn, and JSFiddle.
          </p>
          <br />
          <hr />
          <br />
          <p>
            If you are having trouble with navigation, a static version of this
            webpage is available at&nbsp;
            <a href="/v1" target="_blank" rel="noopener noreferrer">this link.</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Modal;
