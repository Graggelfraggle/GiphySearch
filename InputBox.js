import React, { Component } from "react";

class InputBox extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "Cheese"
    };
    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInput(e) {
    this.setState({ searchTerm: document.getElementById("searchterm").value });
  }
  onSubmit(e) {
    this.props.appHandleSubmit(this.state.searchTerm);
  }

  render() {
    return (
      <div>
        <input type="text" id="searchterm" onChange={this.onInput.bind(this)} />
        <input type="submit" onClick={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

export default InputBox;
