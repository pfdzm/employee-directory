import React, { Component } from "react";

class Searchbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="input-group mb-3 col-lg-6 mx-auto">
        <input
          value={this.state.search}
          name="search"
          onChange={this.handleInputChange}
          type="text"
          placeholder={this.props.placeholder}
          className="form-control"
        />
        <button className="btn btn-outline-secondary" type="button">
          Search
        </button>
      </div>
    );
  }
}

export default Searchbox;
