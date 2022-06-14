import React from "react";

function withTooltip(Component) {
  return class extends React.Component {
    state = { showToolTip: false };

    mouseOver = () => {
      this.setState({ showToolTip: true });
    };
    mouseOut = () => {
      this.setState({ showToolTip: false });
    };
    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component showTooltip={this.state.showToolTip} {...this.props} />
        </div>
      );
    }
  };
}

export default withTooltip;
