import React, { Component } from "react";
import withTooltip from "./withTooltip";

class Movie extends Component {
  render() {
    return (
      <div>
        Movie
        <div>{this.props.showTooltip && <div>tooltip</div>}</div>
      </div>
    );
  }
}

export default withTooltip(Movie);
