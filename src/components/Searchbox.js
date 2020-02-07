import React, { Component } from "react";

class Searchbox extends Component {
  render() {
    return (
      <input
        value={this.props.searchTerm}
        name="searchTerm"
        onChange={this.props.inputHandler}
        type="text"
        placeholder={this.props.placeholder}
        className="my-5 mx-auto bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block lg:w-3/4 appearance-none leading-normal"
      />
    );
  }
}

export default Searchbox;
