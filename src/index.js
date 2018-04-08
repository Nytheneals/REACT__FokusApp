import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
import "./css/_animations.css";
import "./css/_normalise.css";
import "./css/_style.css";
import "./css/_topography.css";

// COMPONENTS

import Main from "./components/Main";
import PhotoGrid from "./components/PhotoGrid";
import SingleView from "./components/SingleView";

// DEPENDENCIES(REACT-ROUTER)
import { Router, route } from "react-router-dom";
// import {Router, Route, IndexRoute, browserHistory} from 'react-router-dom';
const router = (
  <Router>
    <Route path="/" component={Main} />
    <IndexRoute component={PhotoGrid} />
    <Route path="/view/:postId" component={SingleView} />
  </Router>
);

ReactDOM.render(<router />, document.getElementById("root"));
// registerServiceWorker();
