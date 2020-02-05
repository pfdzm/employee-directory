import React, { Component } from "react";
import Searchbox from "./Searchbox";
import EmployeeList from "./EmployeeList";

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
        <Searchbox
          inputHandler={this.handleInputChange}
          placeholder={"Type to search for an employee"}
          searchTerm={this.state.searchTerm}
        />
        <EmployeeList data={this.state.data} />
      </div>
    );
  }
}
