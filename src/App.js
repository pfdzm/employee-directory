import React from "react";
import logo from "./logo.svg";
import "./App.css";

// import some randomly generated user data from https://randomuser.me/
import { results } from "./users.json";

import Searchbox from "./components/Searchbox";
import Employee from "./components/Employee";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Searchbox placeholder={"Type to search for an employee"} />
        {results.map(user => {
          return (
            <Employee data={user}/>
          );
        })}
      </header>
    </div>
  );
}

export default App;
