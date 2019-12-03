import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: ["waffles", "croissants", "donuts", "biscuits & gravy", "toast"]
    };
  }

  render() {
    let breakfastFoods = this.state.list.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{breakfastFoods}</div>;
  }
}

export default App;
