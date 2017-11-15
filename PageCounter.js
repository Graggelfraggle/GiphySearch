import React, { Component } from "react";
import "./PageCounter.css";

class PageCounter extends Component {
  constructor() {
    super();

    this.state = {
      lowBound: 0,
      upBound: 10
    };
  }
  leftClick() {
    if (this.state.lowBound > 0) {
      this.setState({
        lowBound: this.state.lowBound - 10,
        upBound: this.state.upBound - 10
      });
      this.props.pageUpdate(this.state.lowBound - 10);
    }
  }

  rightClick() {
    this.setState({
      lowBound: this.state.lowBound + 10,
      upBound: this.state.upBound + 10
    });
    this.props.pageUpdate(this.state.lowBound + 10);
  }

  render() {
    return (
      <div className="PageChange">
        <input
          className="PageChange"
          type="submit"
          id="searchterm"
          value="<"
          onClick={this.leftClick.bind(this)}
        />
        {this.state.lowBound + " to " + this.state.upBound}
        <input
          className="PageChange"
          type="submit"
          id="searchterm"
          value=">"
          onClick={this.rightClick.bind(this)}
        />
      </div>
    );
  }
}

export default PageCounter;
