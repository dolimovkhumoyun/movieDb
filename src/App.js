import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import { Switch, Route } from "react-router-dom";
import Movie from "./components/common/movie/Movie";

class App extends Component {
  render() {
    return (
      <div className="">
        <Switch>
          <Route path="/movie/:id" component={Movie} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
