import React, { Component } from "react";
import { Link } from "react-router";

class Main extends Component {
  render() {
    return (
      <div>
        <Link to="/">Reduxstagram </Link>
        <h1>Main Component</h1>
      </div>
    );
  }
}

export default Main;
