// React
import React, { Fragment, useContext } from "react";

// Custom
import Header from "./organisms/Header";
import MovieList from "./organisms/MovieList";
import { MovieContext } from "./../../context/MovieContext";
import Paging from "./organisms/Pagination";
import { getMovies } from "./../../api/movieApi";

// Third-party

const MainPage = props => {
  const { movies, dispatch } = useContext(MovieContext);
  const onPageClick = page => {
    getMovies(dispatch, page);
  };
  return (
    <Fragment>
      <Header />
      <MovieList items={movies} />
      <Paging data={movies} onClick={onPageClick} />
    </Fragment>
  );
};

export default MainPage;
