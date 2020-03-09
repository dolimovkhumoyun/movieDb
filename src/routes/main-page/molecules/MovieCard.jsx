import React from "react";

const MovieCard = () => {
  return (
    <div class="card">
      <div className="row">
        <div className="col-md-7">
          <img
            class="card-img-top img-responsive"
            src="https://via.placeholder.com/350x500"
            alt="Card_image_cap"
          />
        </div>
        <div className="col-md-5">
          <div class="card-body">
            <p class="card-text">Film name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
