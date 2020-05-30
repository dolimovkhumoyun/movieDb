import React, { useContext } from "react";

// Custom
import { MovieContext } from "../../../context/MovieContext";

// 3rd Party
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  speed: 400,
  slidesToShow: 8,
  slidesToScroll: 4,
};

const truncate = (string) => {
  return string.length > 15 ? string.substr(0, 15 - 1) + "..." : string;
};

const MovieSlider = () => {
  const { movies } = useContext(MovieContext);
  const response = !movies.isFetching ? movies.response.results : [];
  return (
    <div className="container-fluid" style={{ padding: 10 }}>
      <Slider {...settings}>
        {response.map((movie) => (
          <img
            className="card-img-top img-responsive p-1"
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt="Card cap"
          />
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
