import React, { Component } from "react";

class Footer extends Component {
  constructor() {
    super();
  }

  onClickLink = url => {
    window.open(url);
  };

  render() {
    return (
      <div className="container-main-footer">
        <div className="links-container">
          <div
            onClick={() =>
              this.onClickLink("https://www.linkedin.com/in/thomas-claydon/")
            }
            className="social-link"
          >
            <i className="fab fa-linkedin" />
          </div>
          <div
            onClick={() => this.onClickLink("https://github.com/gittc100")}
            className="social-link"
          >
            <i className="fab fa-github-square" />
          </div>
          <div
            onClick={() =>
              this.onClickLink("https://twitter.com/ThomasClaydon1")
            }
            className="social-link"
          >
          <i className="fab fa-twitter-square"></i>
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
