import React, { Component } from "react";
import Searchbox from "./Searchbox";
import Employee from "./Employee";

// import some randomly generated user data from https://randomuser.me/
import { results } from "../users.json";

export default class Container extends Component {
  state = {
    search: "",
    data: results
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
          searchTerm={this.state.search}
        />
        {results
          //   .filter(user => user.email.includes("pab"))
          .map(user => {
            return <Employee data={user} />;
          })}
      </div>
    );
  }
}
