import React, { Component } from "react";

class Searchbox extends Component {
  render() {
    return (
      <div className="input-group mb-3 col-lg-6 mx-auto">
        <input
          value={this.props.searchTerm}
          name="searchTerm"
          onChange={this.props.inputHandler}
          type="text"
          placeholder={this.props.placeholder}
          className="form-control"
        />
      </div>
    );
  }
}

export default Searchbox;
