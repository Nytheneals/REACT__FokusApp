import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Single from "./Single";

class PhotoGrid extends Component {
  render() {
    return (
      <Router>
        <div className="photo-grid">
          <li>
            <Link to="/view/all">All photos</Link>
          </li>
          <li>
            <Link to="/view/rex">Grid is here</Link>
          </li>
          <Route path="/view/:postId" component={Single} />
        </div>
      </Router>
    );
  }
}

export default PhotoGrid;
