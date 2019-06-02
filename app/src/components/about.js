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
                  experience in mechanical engineering <span>2+ years</span> working as a
                  HVAC/Plumbing design engineer and <span>9+ years</span> in the
                  construction industry as Laborer, Drafter, and Manager.
                  Offering flexible technical and management skills suited for a
                  dynamic working environment.
                </p>
              </div>
              <div className="container-skills">
                {/* <h3>Skills</h3> */}
                <div className="container-skills-lists">
                  <div className="container-skills-lists-sub">
                    <h4>Languages</h4>
                    <ul>
                      <li>Javascript</li>
                      <li>Python</li>
                      <li>C</li>
                    </ul>
                  </div>
                  <div className="container-skills-lists-sub">
                    <h4>Front End</h4>
                    <ul>
                      <li>HTML5</li>
                      <li>CSS</li>
                      <li>LESS</li>
                      <li>SASS</li>
                      <li>React.js</li>
                      <li>Redux.js</li>
                    </ul>
                  </div>
                  <div className="container-skills-lists-sub">
                    <h4>Back End</h4>
                    <ul>
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>knex.js</li>
                      <li>SQLite</li>
                      <li>PostgresSQL</li>
                      <li>JestJS.io</li>
                    </ul>
                  </div>
                  <div className="container-skills-lists-sub">
                    <h4>General Web</h4>
                    <ul>
                      <li>GitHub</li>
                      <li>Netlify</li>
                      <li>Heroku</li>
                    </ul>
                  </div>
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
