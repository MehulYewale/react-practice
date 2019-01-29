import React, { Component } from "react";
import "./App.css";
import Employees from "./Employee/Employees";

class App extends Component {
  render() {
    console.log("App - render method");

    return (
      <div className="App">
        <Employees />
      </div>
    );
  }
}

export default App;
