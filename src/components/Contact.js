import React, { Component } from "react";

class Contact extends Component {
  state = { subject: "", message: "" };
  openMailClient = () => {
    window.location.href =
      "mailto:eric@karnis.ca?subject=" +
      this.state.subject +
      "&body=" +
      this.state.message;
  };

  render() {
    return (
      <div id="Contact">
        <form>
          <label for="subject">Subject</label>
          <input
            name="subject"
            value={this.state.subject}
            type="text"
            onChange={event => this.setState({ subject: event.target.value })}
          />
          <label for="message">Message</label>

          <textarea
            name="message"
            value={this.state.message}
            rows="4"
            onChange={event => this.setState({ message: event.target.value })}
          />
          <button onClick={this.openMailClient}>Open mail client</button>
        </form>
        <p>Or just email me at eric@karnis.ca</p>
        <p>
          Or message me on{" "}
          <a href="https://www.linkedin.com/in/ekarnis/">Linkedin</a>
        </p>
      </div>
    );
  }
}

export default Contact;
