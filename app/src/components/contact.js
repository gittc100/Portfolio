import React, { Component } from "react";

class Contact extends Component {
  constructor(){
    super();
    this.state={
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

  render() {
    return (
      <div className="container-main-contact">
        <section id="contact">
          <div className="container-form">
            <form action="">
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
              <button>Submit</button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
