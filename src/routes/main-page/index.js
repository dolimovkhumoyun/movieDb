// React
import React, { Fragment, useContext } from "react";

// Custom
import Header from "./organisms/Header";
import MovieList from "./organisms/MovieList";
import { MovieContext } from "./../../context/MovieContext";
import Paging from "./organisms/Pagination";

// Third-party

const MainPage = props => {
  const { movies } = useContext(MovieContext);
  return (
    <Fragment>
      <Header />
      <MovieList items={movies} />
      <Paging />
    </Fragment>
  );
};

export default MainPage;
