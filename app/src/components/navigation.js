import React, { Component } from "react";

class Naviagtion extends Component {
  constructor() {
    super();
    this.state = {
      homeActive: "link-active",
      aboutActive: "link-inactive",
      projectsActive: "link-inactive",
      contactActive: "link-inactive"
    };
  }

  link = (btn) =>{
    for(let key in this.state){
      console.log(key);
      console.log(btn);
      if(btn === key){
        console.log("true");
        this.setState({
          [key]: "link-active"
        });
      }else{
        console.log("false");
        this.setState({
          [key]: "link-inactive"
        });
      }
    }
  };

  render() {
    return (
      <div className="container-main-nav">
        <h1>Thomas Claydon</h1>
        <nav>
          <a onClick={()=>{this.link("homeActive")}} className={`nav-link ${this.state.homeActive}`} href="#home">
            Home
          </a>
          <a onClick={()=>{this.link("aboutActive")}} className={`nav-link ${this.state.aboutActive}`} href="#about">
            About
          </a>
          <a onClick={()=>{this.link("projectsActive")}} className={`nav-link ${this.state.projectsActive}`} href="#projects">
            Projects
          </a>
          <a onClick={()=>{this.link("contactActive")}} className={`nav-link ${this.state.contactActive}`} href="#contact">
            Contact
          </a>
        </nav>
      </div>
    );
  }
}

export default Naviagtion;
