import React, { Component } from "react";

class IncDecButton extends Component {
  IncrementItem = () => {
    // Pass just the updated clicks value to the parent
    this.props.onClicksChange(this.props.clicks + 1);
  };

  DecreaseItem = () => {
    // Ensure clicks don't go below 0
    this.props.onClicksChange(
      this.props.clicks > 0 ? this.props.clicks - 1 : 0,
    );
  };

  render() {
    return (
      <div
        className={`flex w-full items-center justify-center gap-3 border-2 border-black `}
      >
        <button
          className="w-[50%] border-2 font-bold"
          onClick={this.IncrementItem}
        >
          +
        </button>
        <span>
          <h4>{this.props.clicks > 0 ? this.props.clicks : "0"}</h4>
        </span>
        <button
          className="w-[50%] border-2 font-bold"
          onClick={this.DecreaseItem}
        >
          -
        </button>
      </div>
    );
  }
}

//bg-[#6B7280]

export default IncDecButton;
