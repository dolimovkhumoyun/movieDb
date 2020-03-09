import React from "react";
import MovieCard from "./../molecules/MovieCard";
const tmp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 19];

const MovieList = () => {
  return (
    <div class="row card-deck">
      {tmp.map(t => (
        <div className="col-md-3 mt-4">
          <MovieCard />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
