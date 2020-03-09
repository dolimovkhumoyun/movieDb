// React
import React, { Fragment } from "react";

// Custom
import Header from "./organisms/Header";
import MovieList from "./organisms/MovieList";

// Third-party

const MainPage = () => {
  return (
    <Fragment>
      <Header />
      <MovieList />
    </Fragment>
  );
};

export default MainPage;
