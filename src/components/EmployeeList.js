import React from "react";

import Employee from "./Employee";

export default class EmployeeList extends Employee {
  sortByLastNameAsc = (a, b) => {
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
  render() {
    return this.props.data
      .slice(0, 10)
      .sort(this.sortByLastNameAsc)
      .map(employee => {
        return <Employee {...employee} />;
      });
  }
}
