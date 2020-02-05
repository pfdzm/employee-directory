import React, { Component } from "react";

export default class Employee extends Component {
  render() {
    const { picture, name, email } = this.props;
    return (
      <div className="mb-3">
        <div>
          <img src={picture.medium} alt="thumbnail" />
          <span className="font-weight-bold">{name.last}</span>, {name.first}
        </div>
        <div>{email}</div>
      </div>
    );
  }
}
