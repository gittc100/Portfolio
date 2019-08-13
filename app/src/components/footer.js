import React, { Component } from "react";
import resume from "../resume/Resume-Thomas_Claydon.pdf";
import {
  TweenMax,
  TweenLite,
  Elastic,
  Power0,
  Power1,
  Power2,
  Power3,
  Power4,
  Circ
} from "gsap";
class Footer extends Component {
  constructor() {
    super();
    this.state = {
      hoverLinkedIn: "hover-off",
      hoverGit: "hover-off",
      hoverRes: "hover-off"
    };
  }

  onClickRes = url => {
    window.location.href = resume;
  };

  onClickLink = url => {
    window.open(url);
  };

  hover = val => {
    if (this.state[val] === "hover-off") {
      this.setState({ ...this.state, [val]: "hover-on" });
    } else {
      this.setState({ ...this.state, [val]: "hover-off" });
    }
  };

  render() {
    return (
      <div className="container-main-footer">
        <div className="links-container">
          <div
            onMouseOver={() => this.hover("hoverLinkedIn")}
            onMouseOut={() => this.hover("hoverLinkedIn")}
            onClick={() =>
              this.onClickLink("https://www.linkedin.com/in/thomas-claydon/")
            }
            className="social-link"
          >
            <i className="fab fa-linkedin" />
            <p className={this.state.hoverLinkedIn}>LinkedIn</p>
          </div>
          <div
            onMouseOver={() => this.hover("hoverGit")}
            onMouseOut={() => this.hover("hoverGit")}
            onClick={() => this.onClickLink("https://github.com/gittc100")}
            className="social-link"
          >
            <i className="fab fa-github-square" />
            <p className={this.state.hoverGit}>GitHub</p>
          </div>
          <div
            onMouseOver={() => this.hover("hoverRes")}
            onMouseOut={() => this.hover("hoverRes")}
            onClick={() => this.onClickRes()}
            className="social-link"
          >
            <i className="fas fa-file" />
            <p className={this.state.hoverRes}>Resume</p>
          </div>
        </div>
        <div>
          <p>THOMAS CLAYDON ©2019</p>
        </div>
      </div>
    );
  }
}

export default Footer;
