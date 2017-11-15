import React, { Component } from "react";
import "./App.css";
import GiphyCall from "./GiphyCall.js";
import InputBox from "./InputBox.js";
import PageCounter from "./PageCounter.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "Cheese",
      upBound: 10,
      lowBound: 0
    };
    this.appHandleSubmit = this.appHandleSubmit.bind(this);
  }

  appHandleSubmit(txt) {
    this.setState({ searchTerm: txt });
  }

  pageUpdate(low) {
    this.setState({ lowBound: low, upBound: low + 10 });
  }

  render() {
    return (
      <div className="App">
        <h1>Search for gifs!</h1>
        <InputBox appHandleSubmit={term => this.appHandleSubmit(term)} />
        <GiphyCall
          searchTerm={this.state.searchTerm}
          lowBound={this.state.lowBound}
        />
        <h1>Showing Results</h1>
        <PageCounter pageUpdate={term => this.pageUpdate(term)} />
      </div>
    );
  }
}

export default App;
