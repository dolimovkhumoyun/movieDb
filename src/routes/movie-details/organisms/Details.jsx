import React, { Fragment } from "react";
import MovieCard from "../molecules/MovieCard";
import DescriptionTable from "../molecules/DescriptionTable";
import MovieSlider from "../molecules/MovieSlider";

const Details = ({ item, genres }) => {
  const details = item.response;
  return (
    <Fragment>
      <div className="row pt-4">
        <div className="col-md-3">
          <MovieCard movie={details} />
        </div>
        <div className="col-md-8">
          <DescriptionTable details={details} />
        </div>
      </div>
      <MovieSlider />
    </Fragment>
  );
};

export default Details;
