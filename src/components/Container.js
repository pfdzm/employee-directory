import React, { Component } from "react";
import EmployeeTable from "./EmployeeTable";

// import some randomly generated user data from https://randomuser.me/
import { results as data } from "../users.json";

export default class Container extends Component {
  state = {
    searchTerm: "",
    data
  };

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
      <div>
        <EmployeeTable
          searchTerm={this.state.searchTerm}
          inputHandler={this.handleInputChange}
          data={this.state.data}
        />
      </div>
    );
  }
}
