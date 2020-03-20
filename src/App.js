import React, { Component } from "react";
import Stock from "./components/Stock";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Stock />
      </div>
    );
  }
}
