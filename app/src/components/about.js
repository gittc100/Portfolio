import React, { Component } from "react";
import image from "../imgs/Photo.jpg";
class About extends Component {
  render() {
    return (
      <div className="container-main-about">
        <section id="about">
          <div className="container-main">
            <h2>ABOUT</h2>
            <div className="container-about">
              <div className="container-image">
                <img src={image} alt="not working" />
                <p>
                  Professional Software Engineer and Full Stack Web Developer
                  who is passionate about cross technology integration. Prior
                  experience in mechanical engineering (2+ years) working as a
                  HVAC/Plumbing design engineer and (9+ years) in the
                  construction industry as Laborer, Drafter, and Manager.
                  Offering flexible technical and management skills suited for a
                  dynamic working environment.
                </p>
              </div>
              <div className="container-skills">
                <h3>Skills</h3>
                <div className="container-skills-lists">
                  <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>LESS</li>
                    <li>Javascript</li>
                    <li>React.js</li>
                    <li>Redux.js</li>
                  </ul>
                  <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>SQLite</li>
                    <li>knex.js</li>
                    <li>PostgresSQL</li>
                  </ul>
                  <ul>
                    <li>GitHub</li>
                    <li>Python</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
