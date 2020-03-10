import React, { useContext } from "react";
import MovieCard from "./../molecules/MovieCard";
import { MovieContext } from "./../../../context/MovieContext";

// const tmp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 19];

const MovieList = ({ items }) => {
  const { genres } = useContext(MovieContext);
  if (!items.isFetching) {
    const { results } = items.response;
    return (
      <div className="row card-deck">
        {results.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-6 mt-4" key={index}>
            <MovieCard item={item} genres={genres} />
          </div>
        ))}
      </div>
    );
  } else return false;
};

export default MovieList;
