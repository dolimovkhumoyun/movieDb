import React, { useContext } from "react";
import MovieCard from "./../molecules/MovieCard";
import { MovieContext } from "./../../../context/MovieContext";
import ListLoading from "./ListLoading";

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
  } else return <ListLoading />;
};

export default MovieList;
