// React
import React from "react";

// Custom

// Third-party
import { Spin } from "antd";
import Loadable from "react-loadable";
import { Switch, Route } from "react-router-dom";

const AsyncMainPage = Loadable({
  loader: () => import("../../../routes/main-page"),
  loading() {
    return <Spin />;
  }
});

const AsyncMovieDetails = Loadable({
  loader: () => import("../../../routes/movie-details"),
  loading() {
    return <Spin />;
  }
});

const AppContent = () => {
  return (
    <Switch>
      <Route path="/movie/:id" component={AsyncMovieDetails} />
      <Route path="/" component={AsyncMainPage} />
    </Switch>
  );
};

export default AppContent;
