import React, { createContext, useReducer, useEffect } from "react";
import { movieReducer } from "./../reducers/movieReducer";
import { getMovies, getGenres } from "./../api/movieApi";
import { genreReducer } from "./../reducers/genreReducer";

export const MovieContext = createContext();

const MovieContextProvider = props => {
  const [movies, dispatch] = useReducer(movieReducer, [], () => {
    return [];
  });
  const [genres, genreDispatch] = useReducer(genreReducer, [], () => {
    return [];
  });

  useEffect(() => {
    getMovies(dispatch);
    getGenres(genreDispatch);
  }, []);

  return (
    <MovieContext.Provider value={{ movies, genres, dispatch }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
