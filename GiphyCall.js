import React, { Component } from "react";
import superagent from "superagent";
import GifDisplay from "./GifDisplay.js";

class GiphyCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      retrieved: 0,
      searchTerm: this.props.searchTerm
    };
  }

  componentWillMount(props) {
    superagent
      .get(
        "http://api.giphy.com/v1/gifs/search?api_key=f2a46c536f804ff5882a0f5acd2bb922&q=" +
          this.props.searchTerm +
          "&limit=100"
      )
      .end((error, response) => {
        this.setState({ gifs: response.body, retrieved: 1 });
      });
  }

  componentWillReceiveProps(nextProps) {
    superagent
      .get(
        "http://api.giphy.com/v1/gifs/search?api_key=f2a46c536f804ff5882a0f5acd2bb922&q=" +
          nextProps.searchTerm +
          "&limit=100"
      )
      .end((error, response) => {
        this.setState({ gifs: response.body, retrieved: 1 });
      });
  }

  render() {
    if (this.state.retrieved === 0) {
      return "loading";
    }
    return (
      <div>
        <GifDisplay gifs={this.state.gifs} lowBound={this.props.lowBound} />
      </div>
    );
  }
}

export default GiphyCall;
