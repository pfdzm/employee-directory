import React, { Component } from "react";

class Searchbox extends Component {
  render() {
    return (
      <div className="md:flex bg-white rounded-lg my-1 mx-auto lg:w-1/2 w-full border-solid border-1 border-gray-200">
        <input
          value={this.props.searchTerm}
          name="searchTerm"
          onChange={this.props.inputHandler}
          type="text"
          placeholder={this.props.placeholder}
          className="w-full"
        />
      </div>
    );
  }
}

export default Searchbox;
