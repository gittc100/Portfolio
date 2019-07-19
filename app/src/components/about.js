import React, { Component } from "react";
import profilePic from "../imgs/Photo.jpg";
import cLogo from "../imgs/c.svg";
import css3Logo from "../imgs/css3.svg";
import expressLogo from "../imgs/express.png";
import githubLogo from "../imgs/github.svg";
import herokuLogo from "../imgs/heroku.png";
import htmlLogo from "../imgs/html-5.svg";
import jsLogo from "../imgs/javascript.svg";
import jestLogo from "../imgs/jestjs.ico";
import knexLogo from "../imgs/knex.png";
import lessLogo from "../imgs/less_logo.png";
import netlifyLogo from "../imgs/netlify.ico";
import nodeLogo from "../imgs/nodejs.svg";
import postgresSQLLogo from "../imgs/postgresSQL.png";
import pythonLogo from "../imgs/python.svg";
import reactLogo from "../imgs/reactjs.svg";
import reduxLogo from "../imgs/redux.svg";
import sassLogo from "../imgs/sass.svg";
import sqlLogo from "../imgs/sqlite.png";

class About extends Component {
  constructor() {
    super();
  }
  onClickLink = url => {
    window.open(url);
  };

  render() {
    return (
      <div className="container-main-about">
        <section id="about">
          <div className="container-main">
            <h2>ABOUT</h2>
            <div className="container-about">
              <div className="container-image">
                <img src={profilePic} alt="not working" />
                <p>
                  Professional Software Engineer and Full Stack Web Developer
                  who is passionate about cross technology integration. Prior
                  experience in mechanical engineering <span>2+ years</span>{" "}
                  working as a HVAC/Plumbing design engineer and{" "}
                  <span>9+ years</span> in the construction industry as Laborer,
                  Drafter, and Manager. I desire to get involved with an agile
                  team focused on continuous improvement and personal
                  developement. My current experience is in Full-Satck Web developement with the desire to expand further into other feilds of software engineering. 
                </p>
              </div>
              <div className="container-skills">
                {/* <h3>Skills</h3> */}
                <div className="container-skills-lists">
                  <div className="container-skills-lists-sub">
                    <h4>Languages</h4>
                    <hr />
                    <div className="container-skills-lists-sub2">
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() =>
                          this.onClickLink(
                            "https://www.w3schools.com/js/js_intro.asp"
                          )
                        }
                      >
                        <img
                          src={jsLogo}
                          alt="Javascript Logo"
                          title="Javascript"
                        />
                      </div>
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() =>
                          this.onClickLink("https://www.python.org/")
                        }
                      >
                        <img
                          src={pythonLogo}
                          alt="Python Logo"
                          title="Python"
                        />
                      </div>
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() =>
                          this.onClickLink(
                            "https://en.wikipedia.org/wiki/C_(programming_language)"
                          )
                        }
                      >
                        <img src={cLogo} alt="C Logo" title="C" />
                      </div>
                    </div>
                  </div>
                  <div className="container-skills-lists-sub">
                    <h4>Front End</h4>
                    <hr />
                    <div className="container-skills-lists-sub2">
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() =>
                          this.onClickLink(
                            "https://www.w3schools.com/html/html5_intro.asp"
                          )
                        }
                      >
                        <img src={htmlLogo} alt="HTML5 Logo" title="HTML5" />
                      </div>
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() =>
                          this.onClickLink(
                            "https://www.w3schools.com/css/default.asp"
                          )
                        }
                      >
                        <img src={css3Logo} alt="CSS3 Logo" title="CSS3" />
                      </div>
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() => this.onClickLink("http://lesscss.org/")}
                      >
                        <img src={lessLogo} alt="LESS Logo" title="LESS" />
                      </div>
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() =>
                          this.onClickLink("https://sass-lang.com/")
                        }
                      >
                        <img src={sassLogo} alt="SASS Logo" title="SASS" />
                      </div>
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() => this.onClickLink("https://reactjs.org/")}
                      >
                        <img
                          src={reactLogo}
                          alt="React.js Logo"
                          title="React.js"
                        />
                      </div>
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() =>
                          this.onClickLink("https://redux.js.org/")
                        }
                      >
                        <img
                          src={reduxLogo}
                          alt="Redux.js Logo"
                          title="Redux.js"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="container-skills-lists-sub">
                    <h4>Back End</h4>
                    <hr />
                    <div className="container-skills-lists-sub2">
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() =>
                          this.onClickLink("https://nodejs.org/en/")
                        }
                      >
                        <img
                          src={nodeLogo}
                          alt="Node.js Logo"
                          title="Node.js"
                        />
                      </div>
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() =>
                          this.onClickLink("https://expressjs.com/")
                        }
                      >
                        {/* <img
                          src={expressLogo}
                          alt="Express.js Logo"
                          title="Express.js"
                        /> */}
                        <p title="Express.js">Express</p>
                      </div>
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() => this.onClickLink("https://knexjs.org/")}
                      >
                        <img
                          src={knexLogo}
                          alt="Knex.js Logo"
                          title="Knex.js"
                        />
                      </div>
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() =>
                          this.onClickLink("https://sqlite.org/index.html")
                        }
                      >
                        <img src={sqlLogo} alt="SQlite Logo" title="SQlite" />
                      </div>
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() =>
                          this.onClickLink("https://www.postgresql.org/")
                        }
                      >
                        <img
                          src={postgresSQLLogo}
                          alt="postgresSQL Logo"
                          title="postgresSQL"
                        />
                      </div>
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() => this.onClickLink("https://jestjs.io/")}
                      >
                        <img
                          src={jestLogo}
                          alt="Jest.js Logo"
                          title="Jest.js"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="container-skills-lists-sub">
                    <h4>General Web</h4>
                    <hr />
                    <div className="container-skills-lists-sub2">
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() => this.onClickLink("https://github.com/")}
                      >
                        <img
                          src={githubLogo}
                          alt="GitHub Logo"
                          title="GitHub"
                        />
                      </div>
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() =>
                          this.onClickLink("https://app.netlify.com/")
                        }
                      >
                        <img
                          src={netlifyLogo}
                          alt="Netlify Logo"
                          title="Netlify"
                        />
                      </div>
                      <div
                        className="container-skills-lists-imgdiv"
                        onClick={() =>
                          this.onClickLink("https://www.heroku.com")
                        }
                      >
                        <img
                          src={herokuLogo}
                          alt="Heroku Logo"
                          title="Heroku"
                        />
                      </div>
                    </div>
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
