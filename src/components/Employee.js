import React, { Component } from "react";

export default class Employee extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="mb-3">
        <div>
          <img src={data.picture.thumbnail} alt="thumbnail" />
          <span className="font-weight-bold">{data.name.last}</span>,{" "}
          {data.name.first}
        </div>
        <div>{data.email}</div>
      </div>
    );
  }
}
