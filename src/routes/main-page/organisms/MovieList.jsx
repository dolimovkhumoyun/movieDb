import React from "react";
import MovieCard from "./../molecules/MovieCard";
// const tmp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 19];

const MovieList = ({ items }) => {
  const list = items[0] !== undefined ? items[0].results : [];
  return (
    <div className="row card-deck">
      {list.map((item, index) => (
        <div className="col-lg-4 col-md-4 col-sm-6 mt-4" key={index}>
          <MovieCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
