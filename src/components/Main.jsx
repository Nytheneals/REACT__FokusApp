import React, { Component } from "react";

import "../styles/_style.css";

import PhotoGrid from "./PhotoGrid";
import Single from "./Single";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Main Component</h1>
        <PhotoGrid />
        <Single />
      </div>
    );
  }
}

export default Main;
