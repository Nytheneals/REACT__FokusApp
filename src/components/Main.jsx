import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import "../styles/_style.css";

import PhotoGrid from "./PhotoGrid";
import Single from "./Single";
import store from "../store";

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Link to="/">
              <h1>Gram it</h1>
            </Link>
            <Route exact path="/" component={PhotoGrid} />
            <Route path="/view/:postId" component={Single} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default Main;
