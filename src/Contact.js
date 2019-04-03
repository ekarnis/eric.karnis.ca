import React, { Component } from "react";

class Contact extends Component {
  state = { from: "" };
  openMailClient = () => {
    window.open("mailto:eric@karnis.ca?subject=subject&body=body");
  };

  onChange = () => {};

  render() {
    return (
      <div id="Contact">
        <form>
          <input
            value={this.state.from}
            type="email"
            onChange={event => this.setState({ from: event.target.value })}
          />
          <input
            value={this.state.subject}
            type="text"
            onChange={event => this.setState({ subject: event.target.value })}
          />
          <textarea
            value={this.state.body}
            rows="4"
            onChange={event => this.setState({ body: event.target.value })}
          />
          <button onClick={this.openMailClient}>Open mail client</button>
        </form>
      </div>
    );
  }
}

export default Contact;
