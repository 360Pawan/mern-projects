import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

import { Test } from "./test";


interface AppProps {
  name: string;
  age: number;
}

export default class App extends Component<{}, AppProps> {
  constructor(props: string) {
    super(props);

    this.state = {
      name: "Pawan Js",
      age: 24,
    };
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Test/>
        </header>
      </div>
    );
  }
}
