import React, { Component } from "react";
import EmployeeTable from "./EmployeeTable";

// import some randomly generated user data from https://randomuser.me/
import { results as data } from "../users.json";

const sortByLastNameAsc = (a, b) => {
  const nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
};

export default class Container extends Component {
  state = {
    searchTerm: "",
    data,
    filteredData: data,
    resultsPerPage: 5,
    pages: data.length / 5,
    currentPage: 0,
    sortBy: ""
  };

  sortData = event => {
    this.setState({
      sortBy: event.target.textContent,
      data: this.state.data.sort(sortByLastNameAsc)
    });
  };

  handlePrevPage = event => {
    if (this.state.currentPage > 0) {
      this.setState({
        currentPage: this.state.currentPage - 1
      });
    }
  };

  handleNextPage = event => {
    if (this.state.currentPage < this.state.pages - 1) {
      this.setState({
        currentPage: this.state.currentPage + 1
      });
    }
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let { name, value } = event.target;

    if (name === "searchTerm") {
      this.setState({
        searchTerm: value,
        filteredData: this.state.data.filter(({ name, email }) => {
          const searchStr = String(
            name.first + name.last + email
          ).toLowerCase();
          return searchStr.includes(value.toLowerCase());
        })
      });
    }

    if (name === "resultsPerPage") {
      this.setState({
        resultsPerPage: parseInt(value)
      });
    }
    // Updating the input's state
    this.setState({
      currentPage: 0,
      pages: Math.ceil(this.state.filteredData.length / value)
    });
  };

  render() {
    const currentIndex = this.state.currentPage * this.state.resultsPerPage;
    return (
      <div>
        <EmployeeTable
          searchTerm={this.state.searchTerm}
          inputHandler={this.handleInputChange}
          data={this.state.filteredData.slice(
            currentIndex,
            currentIndex + this.state.resultsPerPage
          )}
          results={this.state.filteredData.length}
          currentIndex={currentIndex}
          resultsPerPage={this.state.resultsPerPage}
          handlePrevPage={this.handlePrevPage}
          handleNextPage={this.handleNextPage}
          sortData={this.sortData}
          sortBy={this.state.sortBy}
        />
      </div>
    );
  }
}
