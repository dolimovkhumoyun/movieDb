import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../../../routes/main-page";
import MovieDetails from "../../../routes/movie-details";

const AppContent = () => {
  return (
    <Switch>
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/" component={MainPage} />
    </Switch>
  );
};

export default AppContent;
