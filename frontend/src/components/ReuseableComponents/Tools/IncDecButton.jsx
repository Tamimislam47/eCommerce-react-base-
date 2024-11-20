import React, { Component } from "react";

class IncDecButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({
      clicks: this.state.clicks < 0 ? 0 : this.state.clicks - 1,
    });
  };

  render() {
    return (
      <div className="flex w-[20%] items-center justify-center gap-3 bg-[#6B7280] text-white">
        <button className="w-[50%] font-bold" onClick={this.IncrementItem}>
          +
        </button>
        <span>
          {" "}
          {this.state.show ? (
            <h4>{this.state.clicks > 0 ? this.state.clicks : "0"}</h4>
          ) : (
            ""
          )}
        </span>
        <button className="w-[50%] font-bold" onClick={this.DecreaseItem}>
          -
        </button>
      </div>
    );
  }
}

export default IncDecButton;
