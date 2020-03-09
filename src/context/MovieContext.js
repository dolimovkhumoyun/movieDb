import React, { createContext, useReducer, useEffect } from "react";
import { movieReducer } from "./../reducers/movieReducer";
import { getMovies } from "./../api/movieApi";

export const MovieContext = createContext();

const MovieContextProvider = props => {
  const [movies, dispatch] = useReducer(movieReducer, [], () => {
    return [];
  });

  useEffect(() => {
    getMovies(dispatch);
  }, []);

  return (
    <MovieContext.Provider value={{ movies, dispatch }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
