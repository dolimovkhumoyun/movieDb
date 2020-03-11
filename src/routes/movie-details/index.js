import React, { Fragment, useEffect, useContext } from "react";
import { getMovie } from "../../api/movieApi";
import { MovieContext } from "../../context/MovieContext";
import { Spin } from "antd";
import Details from "./organisms/Details";

const MovieDetails = props => {
  const { movie, genres, movieDispatch } = useContext(MovieContext);

  useEffect(() => {
    let movie_id = props.match.params.id;
    getMovie(movieDispatch, movie_id);
    // eslint-disable-next-line
  }, []);
  if (!movie.isFetching) {
    return (
      <Fragment>
        <Details item={movie} genres={genres} />
      </Fragment>
    );
  } else return <Spin />;
};

export default MovieDetails;
