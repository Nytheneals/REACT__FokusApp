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
          <h1>
            <Link to="/">Gram it</Link>
          </h1>
          <Route exact path="/" component={PhotoGrid} />
          <Route path="/view/:postId" component={Single} />
        </div>
      </Router>
    );
  }
}

export default Main;
