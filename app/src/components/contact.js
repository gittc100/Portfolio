import React, { Component } from "react";
var nodemailer = require("nodemailer");
require("dotenv").config();

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      description: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  print = e => {
    console.log("send email2");
    e.preventDefault();
    // return;
  };

  // async..await is not allowed in global scope, must use a wrapper
  sendEmail = event => {
    event.preventDefault();
    console.log("test")

    var smtpTransport = nodemailer.createTransport({
      service: "Gmail",  // sets automatically host, port and connection security settings
      auth: {
          user: "tomclaydonportfolio@gmail.com",
          pass: "portmoto102?"
      }
   });
   
   smtpTransport.sendMail({  //email options
      from: "tomclaydonportfolio@gmail.com", // sender address.  Must be the same as authenticated user if using Gmail.
      to: "tomclaydonportfolio@gmail.com", // receiver
      subject: "Emailing with nodemailer", // subject
      text: "Email Example with nodemailer" // body
   }, function(error, response){  //callback
      if(error){
          console.log(error);
      }else{
          console.log("Message sent: " + response.message);
      }
      
      smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
   });



    // let x = process.env.REACT_APP_TEST;
    // x.toString();
    // console.log(x);

    // const trans = nodemailer.createTransport({
    //   service: "Gmail",
    //   auth: {
    //     user: "tomclaydonportfolio@gmail.com",
    //     pass: "portmoto102?"
    //   }
    // });
    // console.log(trans)
    // // console.log(trans.sendMail)
    // trans.verify(function(error, success) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Server is ready to take our messages");
    //   }
    // });



    // let mail_op = {
    //   from: "tomclaydonportfolio@gmail.com",
    //   to: "tomclaydonportfolio@gmail.com",
    //   subject: "Sending Email using Node.js",
    //   // text: "test",
    //   html: '<p>Your html here</p>'// plain text body
    // };
    // console.log(mail_op)

    // trans.sendMail(mail_op, (err, info) => {
    //   if (err) {
    //     console.log(`Error: ${err}`);
    //   } else {
    //     console.log("Email sent: " + info.response);
    //   }
    // });
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
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
