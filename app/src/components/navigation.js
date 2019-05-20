import React, { Component } from "react";
import {TweenLite} from "gsap";

class Naviagtion extends Component {
  constructor() {
    super();
    this.state = {
      homeActive: "link-active",
      aboutActive: "link-inactive",
      projectsActive: "link-inactive",
      contactActive: "link-inactive",
      hamActive: "ham-inactive",
      windowWidth: 0,
      extendMobileNav: false
    };
  }

  componentDidMount() {
    let width = window.innerWidth;
    console.log(width);
    this.setState({
      windowWidth: width
    });
    window.addEventListener("resize", () => this.updateWidth());
  }

  // componentDidUpdate(prevProps, prevState){
  //   let width = window.innerWidth;
  //   console.log(width);
  //   if(prevState.windowWidth !== width){
  //     this.setState({
  //       windowWidth: width
  //     });
  //   }
  // }

  updateWidth = () => {
    let width = window.innerWidth;
    console.log(width);
    this.setState({
      windowWidth: width
    });
  };

  clickHamberger = () => {
    let x = this.state.hamActive === "ham-active"? "ham-inactive" : "ham-active";
    this.setState({
      ...this.state,
      extendMobileNav: !this.state.extendMobileNav,
      hamActive: x
    })
  };

  clickLinkInExtended = value => {
    let x = this.state.hamActive === "ham-active"? "ham-inactive" : "ham-active";
    this.setState(
      {
        ...this.state,
        extendMobileNav: !this.state.extendMobileNav,
        hamActive: x
      },
      () => {
        this.link(value);
      }
    );
  };

  link = btn => {
    for (let key in this.state) {
      console.log(key);
      console.log(btn);
      if(key !== "homeActive" && key !== "aboutActive" && key !== "projectsActive" && key !== "contactActive"){
        continue;
      } else if (btn === key) {
        console.log("true");
        this.setState({
          [key]: "link-active"
        });
      } else {
        console.log("false");
        this.setState({
          [key]: "link-inactive"
        });
      }
    }
  };

  render() {
    return (
      <>
        <div className="container-main-nav">
          <h1>Thomas Claydon</h1>
          <nav>
            {this.state.windowWidth <= 600 ? (
              <div className={`container-hamberger ${this.state.hamActive}`}>
                <i onClick={this.clickHamberger} className={`fas fa-bars `} />
              </div>
            ) : (
              <>
                <a
                  onClick={() => {
                    this.link("homeActive");
                  }}
                  className={`nav-link ${this.state.homeActive}`}
                  href="#home"
                >
                  Home
                </a>
                <a
                  onClick={() => {
                    this.link("aboutActive");
                  }}
                  className={`nav-link ${this.state.aboutActive}`}
                  href="#about"
                >
                  About
                </a>
                {/* <button
                  onClick={() => {
                    this.link("aboutActive");
                    TweenLite.to(window, 2, {scrollTo:"#home"});
                  }}
                  className={`nav-link ${this.state.aboutActive}`}
                >
                  About
                </button> */}
                <a
                  onClick={() => {
                    this.link("projectsActive");
                  }}
                  className={`nav-link ${this.state.projectsActive}`}
                  href="#projects"
                >
                  Projects
                </a>
                <a
                  onClick={() => {
                    this.link("contactActive");
                  }}
                  className={`nav-link ${this.state.contactActive}`}
                  href="#contact"
                >
                  Contact
                </a>
              </>
            )}
          </nav>
        </div>
        {this.state.windowWidth <= 600 &&
        this.state.extendMobileNav === true ? (
          <div className="container-extended-nav">
            <a
              onClick={() => {
                this.clickLinkInExtended("homeActive");
                {
                  /* this.clickHamberger();
                this.link("homeActive"); */
                }
              }}
              className={`nav-link ${this.state.homeActive}`}
              href="#home"
            >
              Home
            </a>
            <a
              onClick={() => {
                this.clickLinkInExtended("aboutActive");
                {
                  /* this.clickHamberger();
                this.link("aboutActive"); */
                }
              }}
              className={`nav-link ${this.state.aboutActive}`}
              href="#about"
            >
              About
            </a>
            <a
              onClick={() => {
                this.clickLinkInExtended("projectsActive");
                {
                  /* this.clickHamberger();
                this.link("projectsActive"); */
                }
              }}
              className={`nav-link ${this.state.projectsActive}`}
              href="#projects"
            >
              Projects
            </a>
            <a
              onClick={() => {
                this.clickLinkInExtended("contactActive");
                {
                  /* this.clickHamberger();
                this.link("contactActive"); */
                }
              }}
              className={`nav-link ${this.state.contactActive}`}
              href="#contact"
            >
              Contact
            </a>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Naviagtion;
