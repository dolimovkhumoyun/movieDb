import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import { Switch, Route } from "react-router-dom";
import Movie from "./components/movie/Movie";
import Login from "./components/login-page/Login";

class App extends Component {
  render() {
    return (
      <div className="">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
