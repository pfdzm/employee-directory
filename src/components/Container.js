import React, { Component } from "react";
import EmployeeTable from "./EmployeeTable";
import {
  sortByLastNameAsc,
  sortByLastNameDesc,
  sortByCountryAsc,
  sortByCountryDesc,
  sortByDateAsc,
  sortByDateDesc,
  sortByEmailAsc,
  sortByEmailDesc
} from "../utils/sort";

export default class Container extends Component {
  state = {
    searchTerm: "",
    filteredData: this.props.data,
    resultsPerPage: 5,
    pages: this.props.data.length / 5,
    currentPage: 0,
    sortBy: "",
    sortType: ""
  };

  sortData = event => {
    const { textContent } = event.target;
    console.log(textContent);

    switch (textContent) {
      case "Name":
        if (this.state.sortType === "asc") {
          this.setState({
            sortBy: textContent,
            sortType: "desc",
            filteredData: this.state.filteredData.sort(sortByLastNameDesc)
          });
        } else {
          this.setState({
            sortBy: textContent,
            sortType: "asc",
            filteredData: this.state.filteredData.sort(sortByLastNameAsc)
          });
        }
        break;
      case "Country":
        if (this.state.sortType === "asc") {
          this.setState({
            sortType: "desc",
            sortBy: event.target.textContent,
            filteredData: this.state.filteredData.sort(sortByCountryDesc)
          });
        } else {
          this.setState({
            sortType: "asc",
            sortBy: textContent,
            filteredData: this.state.filteredData.sort(sortByCountryAsc)
          });
        }
        break;
      case "Created date":
        if (this.state.sortType === "asc") {
          this.setState({
            sortType: "desc",
            sortBy: event.target.textContent,
            filteredData: this.state.filteredData.sort(sortByDateDesc)
          });
        } else {
          this.setState({
            sortType: "asc",
            sortBy: textContent,
            filteredData: this.state.filteredData.sort(sortByDateAsc)
          });
        }
        break;

      case "Email":
        if (this.state.sortType === "asc") {
          this.setState({
            sortType: "desc",
            sortBy: event.target.textContent,
            filteredData: this.state.filteredData.sort(sortByEmailDesc)
          });
        } else {
          this.setState({
            sortType: "asc",
            sortBy: textContent,
            filteredData: this.state.filteredData.sort(sortByEmailAsc)
          });
        }
        break;

      default:
        break;
    }
  };

  handlePrevPage = () => {
    if (this.state.currentPage > 0) {
      this.setState({
        currentPage: this.state.currentPage - 1
      });
    }
  };

  handleNextPage = () => {
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
      this.setState(
        {
          searchTerm: value,
          filteredData: this.props.data.filter(({ name, email, location }) => {
            const searchStr = String(
              name.first + name.last + email + location.country
            ).toLowerCase();
            return searchStr.includes(value.toLowerCase());
          })
        },
        () => {
          this.setState({
            currentPage: 0,
            pages: Math.ceil(
              this.state.filteredData.length / this.state.resultsPerPage
            )
          });
        }
      );
    }

    if (name === "resultsPerPage") {
      this.setState(
        {
          resultsPerPage: parseInt(value)
        },
        () => {
          this.setState({
            currentPage: 0,
            pages: Math.ceil(
              this.state.filteredData.length / this.state.resultsPerPage
            )
          });
        }
      );
    }
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
