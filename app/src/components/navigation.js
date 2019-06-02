import React, { Component } from "react";
import { findDOMNode } from "react-dom";
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
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
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
      homeRef: React.createRef(),
      aboutRef: React.createRef(),
      projectsRef: React.createRef(),
      contactRef: React.createRef()
    };
  }

  componentDidMount() {
    let width = window.innerWidth;
    console.log(width);
    // TweenMax.to("body", 5, {backgroundColor:"red"});
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
                  ref={this.homeRef}
                  onClick={() => {
                    this.link("homeActive");
                    {
                      /* TweenMax.to(window.scrollTo(0, this.homeRef), 1, {
                      ease: Power3.easeOut
                    }); */
                    }

                    {
                      /* var left = offsets.left; */
                    }

                    {/* let div = document
                      .getElementById("home")
                      .getBoundingClientRect();
                    let top = div.top; */}
                    window.scrollTo({
                      top: 100,
                      left: 0,
                      behavior: "smooth"
                    });
                  }}
                  className={`nav-link ${this.state.homeActive}`}
                >
                  Home
                </button>

                <button
                  onClick={() => {
                    this.link("aboutActive");
                    TweenMax.to(window, 1, {
                      scrollTo: { y: "#about" },
                      ease: Power3.easeOut
                    });
                  }}
                  className={`nav-link ${this.state.aboutActive}`}
                >
                  About
                </button>

                <button
                  onClick={() => {
                    this.link("projectsActive");
                    TweenMax.to(window, 1, {
                      scrollTo: { y: "#projects", offsetY: 50 },
                      ease: Power3.easeOut
                    });
                  }}
                  className={`nav-link ${this.state.projectsActive}`}
                >
                  Projects
                </button>

                <button
                  onClick={() => {
                    this.link("contactActive");
                    TweenMax.to(window, 1, {
                      scrollTo: { y: "#contact", offsetY: -20 },
                      ease: Power3.easeOut
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
            {/* <button
              onClick={() => {
                this.clickLinkInExtended("homeActive");
                TweenMax.to(window, 1, {
                  scrollTo: { y: "#home", offsetY: 50 },
                  ease: Power3.easeOut
                });
              }}
              className={`nav-link ${this.state.homeActive}`}
            >
              Home
            </button> */}
            <button
              ref={this.homeRef}
              onClick={() => {
                this.link("homeActive");
                {
                  /* TweenMax.to(window, 1, {
                      scrollTo: { y: "#home", offsetY: 0 },
                      ease: Power3.easeOut
                    }); */
                }
                window.scrollTo(0, this.homeRef);
              }}
              className={`nav-link ${this.state.homeActive}`}
            >
              Home
            </button>
            <button
              onClick={() => {
                this.clickLinkInExtended("aboutActive");
                TweenMax.to(window, 1, {
                  scrollTo: { y: "#about", offsetY: 75 },
                  ease: Power3.easeOut
                });
              }}
              className={`nav-link ${this.state.aboutActive}`}
            >
              About
            </button>
            <button
              onClick={() => {
                this.clickLinkInExtended("projectsActive");
                TweenMax.to(window, 1, {
                  scrollTo: { y: "#projects", offsetY: 80 },
                  ease: Power3.easeOut
                });
              }}
              className={`nav-link ${this.state.projectsActive}`}
            >
              Projects
            </button>
            <button
              onClick={() => {
                this.clickLinkInExtended("contactActive");
                TweenMax.to(window, 1, {
                  scrollTo: { y: "#contact", offsetY: 75 },
                  ease: Power3.easeOut
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

{
  /* <a
                  onClick={() => {
                    this.link("contactActive");
                  }}
                  className={`nav-link ${this.state.contactActive}`}
                  href="#contact"
                >
                  Contact
                </a> */
}
{
  /* <a
                  onClick={() => {
                    this.link("projectsActive");
                  }}
                  className={`nav-link ${this.state.projectsActive}`}
                  href="#projects"
                >
                  Projects
                </a> */
}
{
  /* <a
                  onClick={() => {
                    this.link("homeActive");
                  }}
                  className={`nav-link ${this.state.homeActive}`}
                  href="#home"
                >
                  Home
                </a> */
}
{
  /* <a
                  onClick={() => {
                    this.link("aboutActive");
                  }}
                  className={`nav-link ${this.state.aboutActive}`}
                  href="#about"
                >
                  About
                </a> */
}
{
  /* <a
              onClick={() => {
                this.clickLinkInExtended("homeActive");
                
                 this.clickHamberger();
                this.link("homeActive"); 
              
              }}
              className={`nav-link ${this.state.homeActive}`}
              href="#home"
            >
              Home
            </a> */
}
{
  /* <a
  onClick={() => {
    this.clickLinkInExtended("aboutActive");
    
      this.clickHamberger();
      this.link("aboutActive");
    
  }}
  className={`nav-link ${this.state.aboutActive}`}
  href="#about"
>
  About
</a> */
}
{
  /* 
            <a
              onClick={() => {
                this.clickLinkInExtended("projectsActive");
                
                  this.clickHamberger();
                this.link("projectsActive"); 
                
              }}
              className={`nav-link ${this.state.projectsActive}`}
              href="#projects"
            >
              Projects
            </a> */
}
{
  /* <a
              onClick={() => {
                this.clickLinkInExtended("contactActive");
                
                this.clickHamberger();
                this.link("contactActive"); 
                
              }}
              className={`nav-link ${this.state.contactActive}`}
              href="#contact"
            >
              Contact
            </a> */
}
{
  /* && */
}
{
  /* this.state.extendMobileNav === true */
}
