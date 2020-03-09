import React from "react";

const MovieCard = ({ item }) => {
  if (item !== undefined) {
    console.log(item);
    return (
      <div className="card shadow-sm ">
        <div className="row">
          <div className="col-md-6">
            <img
              className="card-img-top img-responsive"
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt="Card_image_cap"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <p className="card-text">{item.title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="row">
          <div className="col-md-7">
            <img
              className="card-img-top img-responsive"
              src="https://via.placeholder.com/350x500"
              alt="Card_image_cap"
            />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <p className="card-text">Film name</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MovieCard;
