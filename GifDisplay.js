import React, { Component } from "react";
import "./GifDisplay.css";

class GifDisplay extends Component {
  render() {
    var list = [];

    for (var i = this.props.lowBound; i < this.props.lowBound + 10; i++) {
      list.push(
        <img
          className="Gifs"
          key={i}
          alt={i}
          height="200"
          src={this.props.gifs.data[i].images.downsized.url}
        />
      );
    }

    return <div className="Container">{list}</div>;
  }
}
export default GifDisplay;
