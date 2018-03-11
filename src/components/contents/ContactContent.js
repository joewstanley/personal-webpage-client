import React, { Component } from 'react';

class ContactContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.toggleShow = this.toggleShow.bind(this);
    this.formOutput = this.formOutput.bind(this);
  }

  toggleShow() {
    this.setState({show: !this.state.show});
  }

  formOutput() {
    if (this.state.show) {
      return (
        <form className="contact-form" method="POST" action="https://formspree.io/joe@joestanley.tech" autoComplete="off">
          <table className="contact-form">
            <tbody>
              <tr>
                <th>Name</th>
                <td><input type="text" name="name" className="contact-input" required="required" autoComplete="off" /></td>
              </tr>
              <tr>
                <th>Email</th>
                <td><input type="text" name="email" className="contact-input" required="required" autoComplete="off" /></td>
              </tr>
              <tr>
                <th>Subject</th>
                <td><input type="text" name="subject" className="contact-input" required="required" autoComplete="off" /></td>
              </tr>
              <tr>
                <th>Message</th>
                <td><input type="text" name="message" className="contact-input" required="required" autoComplete="off" /></td>
              </tr>
              <tr>
                <td className="center" colSpan="2">
                  <br />
                  <button type="submit" name="submit" className="button contact-submit"><i className="fas fa-paper-plane"></i> Send Message</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      )
    }
  }

  render() {
    return (
      <div className="display contact">
        <div>command:&nbsp;contact<br /><br /></div>
        <hr />
        <p className="center">CONTACT INFO</p>
        <hr />
        <br />
        <p className="center">Have any comments or questions? Feel free to contact me using the information below</p>
        <br /><br />
        <table className="contact-table">
          <tbody>
            <tr>
              <th><i className="fas fa-envelope"></i> Email Address</th>
              <td>
                <a href="mailto:joe@joestanley.tech">joe@joestanley.tech</a>
              </td>
            </tr>
            <tr>
              <th><i className="fas fa-phone"></i> Phone Number</th>
              <td>
                <a href="tel:+13368708355">(336) 870-8355</a>
              </td>
            </tr>
          </tbody>
        </table>
        <br /><br />
        <div className="center">
          <button type="button" className="button" onClick={this.toggleShow}>{this.state.show ? '- ' : '+ '}Email Form</button>
        </div>
        <br />
        {this.formOutput()}
      </div>
    );
  }
}

export default ContactContent;
