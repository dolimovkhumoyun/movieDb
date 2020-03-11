import React, { Fragment } from "react";
import MovieCard from "../molecules/MovieCard";
import DescriptionTable from "../molecules/DescriptionTable";

const Details = ({ item, genres }) => {
  const details = item.response;
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-4 mt-4">
          <MovieCard movie={details} />
        </div>
        <div className="col-md-8 mt-4">
          <DescriptionTable details={details} />
        </div>
      </div>
    </Fragment>
  );
};

export default Details;
