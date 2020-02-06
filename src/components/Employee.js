import React, { Component } from "react";

export default class Employee extends Component {
  render() {
    const { picture, name, email, phone, login } = this.props;
    return (
      <div class="md:flex bg-white rounded-lg my-1 mx-auto max-w-sm p-6 border-solid border-2 border-gray-600">
        <img
          class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
          src={picture.medium}
          alt="mugshot"
        />
        <div class="text-center md:text-left">
          <h2 class="text-lg">
            {name.first} {name.last}
          </h2>
          <div class="text-purple-500">{login.username}</div>
          <div class="text-gray-600">{email}</div>
          <div class="text-gray-600">{phone}</div>
        </div>
      </div>
    );
  }
}
