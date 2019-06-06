import React, { Component } from "react";
const axios = require("axios");
// var express = require("express");
require("dotenv").config();

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      description: "",
      contactSpinner: false
    };
  }

  componentDidMount() {
    setInterval(function() {
      axios.get("https://tom-mailer.herokuapp.com").then(res => {
        console.log("res", res);
        if (res.status == 200) {
          console.log("successful ping");
        } else {
          console.log("unsuccessful ping");
        }
      });
    }, 1800000); // every 30 minutes
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  print = e => {
    console.log("send email2");
    e.preventDefault();
  };

  sendEmail = event => {
    event.preventDefault();
    let body = {
      subject: this.state.subject,
      name: this.state.name,
      email: this.state.email,
      description: this.state.description
    };
    if (
      body.subject === "" ||
      body.name === "" ||
      body.email === "" ||
      body.description === ""
    ) {
      alert(
        "Contact Form is Incomplete, please complete the form and submit again."
      );
    } else {
      this.setState({
        ...this.state,
        contactSpinner: !this.state.contactSpinner
      });
      axios.post("https://tom-mailer.herokuapp.com/send", body).then(res => {
        if (res.data == "sent") {
          alert("Your Email Was Received, Thank You!");
          this.setState({
            ...this.state,
            name: "",
            email: "",
            subject: "",
            description: "",
            contactSpinner: !this.state.contactSpinner
          });
        } else if (res.data == "error") {
          this.setState({
            ...this.state,
            contactSpinner: !this.state.contactSpinner
          });
          alert("Your Email Was Not Received, Try again");
        }
      });
    }
  };

  render() {
    return (
      <div className="container-main-contact">
        <section id="contact">
          <div className="container-form">
            <form onSubmit={this.sendEmail}>
              <h2>CONTACT</h2>
              <input
                autoComplete="off"
                type="text"
                onChange={this.handleChange}
                name="name"
                placeholder="Name"
                value={this.state["name"]}
              />
              <input
                autoComplete="off"
                type="email"
                onChange={this.handleChange}
                name="email"
                placeholder="Email"
                value={this.state["email"]}
              />
              <input
                autoComplete="off"
                type="text"
                onChange={this.handleChange}
                name="subject"
                placeholder="Subject"
                value={this.state["subject"]}
              />
              <textarea
                autoComplete="off"
                type="text"
                onChange={this.handleChange}
                name="description"
                placeholder="Description"
                value={this.state["description"]}
              />
              <button type="submit">{this.state.contactSpinner?"Sending Message ...":"Submit"}</button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
