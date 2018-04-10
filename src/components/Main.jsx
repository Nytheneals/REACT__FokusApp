import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../styles/_style.css";

import PhotoGrid from "./PhotoGrid";
import Single from "./Single";

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/single">
            <h1>Main </h1>
          </Link>
          <PhotoGrid />
          <Route path="/single" component={Single} />
        </div>
      </Router>
    );
  }
}

export default Main;
