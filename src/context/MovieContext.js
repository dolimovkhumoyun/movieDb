import React, { createContext, useReducer, useEffect } from "react";
import { getMovies, getGenres } from "./../api/movieApi";
import { moviesReducer } from "../reducers/moviesReducer";
import { genreReducer } from "./../reducers/genreReducer";
import { movieReducer } from "../reducers/movieReducer";

export const MovieContext = createContext();

const MovieContextProvider = props => {
  const [movies, dispatch] = useReducer(moviesReducer, [], () => {
    return [];
  });
  const [genres, genreDispatch] = useReducer(genreReducer, [], () => {
    return [];
  });
  const [movie, movieDispatch] = useReducer(movieReducer, [], () => {
    return { isFetching: true };
  });

  useEffect(() => {
    getMovies(dispatch);
    getGenres(genreDispatch);
  }, []);

  return (
    <MovieContext.Provider value={{ movies, movie, genres, dispatch, movieDispatch }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
