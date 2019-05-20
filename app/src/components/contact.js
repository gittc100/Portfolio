import React, { Component } from "react";
const nodemailer = require("nodemailer");

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

  // async..await is not allowed in global scope, must use a wrapper
  sendEmail = async () => {
    console.log("send email")
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
    console.log(`testAccount: ${testAccount}`)
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass // generated ethereal password
      }
    });
    console.log(`transporter: ${transporter}`)
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "tomclaydon102@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>" // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  };

  // main().catch(console.error);

  render() {
    return (
      <div className="container-main-contact">
        <section id="contact">
          <div className="container-form">
            <form>
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
              <button onClick={() => this.sendEmail()}>Submit</button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
