import React, {Component} from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';

// COMPONENTS
import PhotoGrid from "./PhotoGrid";
import SingleView from "./SingleView";

// MAIN COMPONENT
class Main extends Component {
  render() {
    return (
      <Router>
        <Route>
          <h1>
            <Link to="/">Kirste-gram</Link>
            {React.cloneElement(this.props.children, this.props)}
          </h1>
        </Route>
      </Router>
    );
  }
}

export default Main;

// {React.cloneElement(this.props.children, this.props)} THIS CLONES THE
// COMPONENTS THAT ARE THE CHILDREN OF THE MAIN COMPONENT INCLUDING THERE
// PARTICULAR PROPS.