import React, { Component } from "react";
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
      extendMobileNav: false,
      // divHomeTop: 0,
      divAboutTop: 0,
      divProjectsTop: 0,
      divContactTop: 0,
      // divHomeBottom: 0,
      divAboutBottom: 0,
      divProjectsBottom: 0,
      divContactBottom: 0
    };
  }

  componentDidMount() {
    let width = window.innerWidth;
    // let divAboutTop =
    //   document.getElementById("about").getBoundingClientRect().top +
    //   window.pageYOffset;
    // let divProjectsTop =
    //   document.getElementById("projects").getBoundingClientRect().top +
    //   window.pageYOffset;
    // let divContactTop =
    //   document.getElementById("contact").getBoundingClientRect().top +
    //   window.pageYOffset;
    // let divAboutBottom =
    //   document.getElementById("about").getBoundingClientRect().bottom +
    //   window.pageYOffset;
    // let divProjectsBottom =
    //   document.getElementById("projects").getBoundingClientRect().bottom +
    //   window.pageYOffset;
    // let divContactBottom =
    //   document.getElementById("contact").getBoundingClientRect().bottom +
    //   window.pageYOffset;
    this.setState({
      windowWidth: width
      // divAboutTop,
      // divProjectsTop,
      // divContactTop,
      // divAboutBottom,
      // divProjectsBottom,
      // divContactBottom
    });
    window.addEventListener("resize", () => this.updateWidth());
    window.addEventListener("scroll", () => this.checkCurrentLocation());
    setTimeout(() => {
      this.checkCurrentLocation();
    }, 500);
  }

  checkCurrentLocation = () => {
    console.log("scrolling");
    let currentLocation = window.pageYOffset + window.screen.height / 2;
    let divAboutTop =
      document.getElementById("about").getBoundingClientRect().top +
      window.pageYOffset;
    let divProjectsTop =
      document.getElementById("projects").getBoundingClientRect().top +
      window.pageYOffset;
    let divContactTop =
      document.getElementById("contact").getBoundingClientRect().top +
      window.pageYOffset;
    let divAboutBottom =
      document.getElementById("about").getBoundingClientRect().bottom +
      window.pageYOffset;
    let divProjectsBottom =
      document.getElementById("projects").getBoundingClientRect().bottom +
      window.pageYOffset;
    let divContactBottom =
      document.getElementById("contact").getBoundingClientRect().bottom +
      window.pageYOffset;
    this.setState({
      divAboutTop,
      divProjectsTop,
      divContactTop,
      divAboutBottom,
      divProjectsBottom,
      divContactBottom
    });

    console.log("currentLocation", currentLocation);
    console.log("divAboutTop", divAboutTop);
    console.log("divAboutBottom", divAboutBottom);
    console.log("divProjectsTop", divProjectsTop);
    console.log("divProjectsBottom", divProjectsBottom);
    console.log("divContactTop", divContactTop);
    console.log("divContactBottom", divContactBottom);
    // if (divHomeTop <= currentLocation && divHomeBottom >= currentLocation) {
    //   this.link("homeActive");
    // }
    if (divAboutTop <= currentLocation && divAboutBottom >= currentLocation) {
      this.link("aboutActive");
    } else if (
      divProjectsTop <= currentLocation &&
      divProjectsBottom >= currentLocation
    ) {
      this.link("projectsActive");
    } else if (
      divContactTop <= currentLocation &&
      divContactBottom >= currentLocation
    ) {
      this.link("contactActive");
    }
  };

  updateWidth = () => {
    let width = window.innerWidth;
    // // let divHomeTop =
    // //   document.getElementById("home").getBoundingClientRect().top +
    // //   window.pageYOffset;
    // let divAboutTop =
    //   document.getElementById("about").getBoundingClientRect().top +
    //   window.pageYOffset;
    // let divProjectsTop =
    //   document.getElementById("projects").getBoundingClientRect().top +
    //   window.pageYOffset;
    // let divContactTop =
    //   document.getElementById("contact").getBoundingClientRect().top +
    //   window.pageYOffset;
    // // let divHomeBottom =
    // //   document.getElementById("home").getBoundingClientRect().bottom +
    // //   window.pageYOffset;
    // let divAboutBottom =
    //   document.getElementById("about").getBoundingClientRect().bottom +
    //   window.pageYOffset;
    // let divProjectsBottom =
    //   document.getElementById("projects").getBoundingClientRect().bottom +
    //   window.pageYOffset;
    // let divContactBottom =
    //   document.getElementById("contact").getBoundingClientRect().bottom +
    //   window.pageYOffset;
    this.setState({
      windowWidth: width
      // divHomeTop,
      // divAboutTop,
      // divProjectsTop,
      // divContactTop,
      // // divHomeBottom,
      // divAboutBottom,
      // divProjectsBottom,
      // divContactBottom
    });
    this.checkCurrentLocation();
  };

  clickHamberger = () => {
    let x =
      this.state.hamActive === "ham-active" ? "ham-inactive" : "ham-active";
    this.setState({
      ...this.state,
      extendMobileNav: !this.state.extendMobileNav,
      hamActive: x
    });
    if (this.state.extendMobileNav === false) {
      return TweenLite.to(".container-extended-nav", 0.2, {
        ease: Power0.easeOut,
        y: 240
      });
    } else {
      return TweenLite.to(".container-extended-nav", 0.2, {
        ease: Power0.easeOut,
        y: 0
      });
    }
  };

  clickLinkInExtended = value => {
    let x =
      this.state.hamActive === "ham-active" ? "ham-inactive" : "ham-active";
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
    return TweenLite.to(".container-extended-nav", 0.2, {
      ease: Power0.easeOut,
      y: 0
    });
  };

  link = btn => {
    for (let key in this.state) {
      console.log(key);
      console.log(btn);
      if (
        key !== "homeActive" &&
        key !== "aboutActive" &&
        key !== "projectsActive" &&
        key !== "contactActive"
      ) {
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
                <button
                  onClick={() => {
                    this.link("aboutActive");
                    window.scrollTo({
                      top: this.state.divAboutTop,
                      left: 0,
                      behavior: "smooth"
                    });
                  }}
                  className={`nav-link ${this.state.aboutActive}`}
                >
                  About
                </button>

                <button
                  onClick={() => {
                    this.link("projectsActive");
                    window.scrollTo({
                      top: this.state.divProjectsTop,
                      left: 0,
                      behavior: "smooth"
                    });
                  }}
                  className={`nav-link ${this.state.projectsActive}`}
                >
                  Projects
                </button>

                <button
                  onClick={() => {
                    this.link("contactActive");
                    window.scrollTo({
                      top: this.state.divContactTop,
                      left: 0,
                      behavior: "smooth"
                    });
                  }}
                  className={`nav-link ${this.state.contactActive}`}
                >
                  Contact
                </button>
              </>
            )}
          </nav>
        </div>

        {this.state.windowWidth <= 600 ? (
          <div className="container-extended-nav">
            <button
              onClick={() => {
                this.clickLinkInExtended("aboutActive");
                window.scrollTo({
                  top: this.state.divAboutTop,
                  left: 0,
                  behavior: "smooth"
                });
              }}
              className={`nav-link ${this.state.aboutActive}`}
            >
              About
            </button>
            <button
              onClick={() => {
                this.clickLinkInExtended("projectsActive");
                window.scrollTo({
                  top: this.state.divProjectsTop,
                  left: 0,
                  behavior: "smooth"
                });
              }}
              className={`nav-link ${this.state.projectsActive}`}
            >
              Projects
            </button>
            <button
              onClick={() => {
                this.clickLinkInExtended("contactActive");
                window.scrollTo({
                  top: this.state.divContactTop,
                  left: 0,
                  behavior: "smooth"
                });
              }}
              className={`nav-link ${this.state.contactActive}`}
            >
              Contact
            </button>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Naviagtion;
