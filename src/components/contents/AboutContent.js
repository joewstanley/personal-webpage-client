import React, { Component } from 'react';

class AboutContent extends Component {
  render() {
    return (
      <div className="display about">
        <div>command:&nbsp;about<br /><br /></div>
        <hr />
        <p className="center">ABOUT ME</p>
        <hr />
        <br />
        <table className="about-table">
          <tbody>
            <tr>
              <td rowSpan="5">
                <img className="about-photo" src="/img/joe_stanley.png" alt="Joe Stanley" />
              </td>
              <td>Name:</td>
              <td>Joseph Stanley</td>
            </tr>
            <tr>
              <td>Birthday:</td>
              <td>Nov 17, 1995</td>
            </tr>
            <tr>
              <td>Education:</td>
              <td>North Carolina State University, Dec 2018</td>
            </tr>
            <tr>
              <td>Degree(s):</td>
              <td>B.S. Computer Science<br />B.A. Anthropology</td>
            </tr>
            <tr>
              <td>Interests:</td>
              <td>Web Development, Internet of Things, Human-Centered Design</td>
            </tr>
          </tbody>
        </table>
        <br /><br />
        <p className="paragraph">
          Much of my interest lies in front-end development, user-interface
          design, and web applications. I pride myself on being open-minded and
          versatile, and my choice of majors, computer science and anthropology,
          reflects this mindset. My studies have focused on two major
          categories, computers and people. This background gives me a unique
          perspective that is relevant in a world where technology and software
          are becoming increasingly personal.
        </p>
        <br />
        <p className="paragraph">
          Aside from web development, I spend a lot of my time tinkering with
          microcontrollers and sensors. I most commonly use variations of the
          Arduino and Raspberry Pi boards, programming in languages like C/C++
          and Python. With these devices, I have created systems such as a keg
          monitor, used to measure the amount of liquid dispensed and predict
          when the container will be empty, and a weight scale, used for food
          preparation and kitchen measurements.
        </p>
      </div>
    );
  }
}

export default AboutContent;
