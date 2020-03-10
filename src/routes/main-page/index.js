// React
import React, { Fragment, useContext } from "react";

// Custom
import Header from "./organisms/Header";
import MovieList from "./organisms/MovieList";
import { MovieContext } from "./../../context/MovieContext";
import Paging from "./organisms/Pagination";
import { getMovies } from "./../../api/movieApi";
import { searchMovie } from "./../../api/movieApi";

// Third-party

const MainPage = props => {
  const { movies, dispatch } = useContext(MovieContext);

  const onSearchClick = input => {
    if (input) searchMovie(dispatch, input);
    else getMovies(dispatch, 1);
  };

  const onPageClick = page => {
    getMovies(dispatch, page);
  };
  return (
    <Fragment>
      <Header onClick={onSearchClick} />
      <MovieList items={movies} />
      <Paging data={movies} onClick={onPageClick} />
    </Fragment>
  );
};

export default MainPage;
