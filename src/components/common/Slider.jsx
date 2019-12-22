import React from "react";

import { Spin, Card, Rate, Col } from "antd";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieSlider = ({ movies, onCardClick }) => {
  const settings = {
    dots: true,
    speed: 800,
    slidesToShow: 7,
    slidesToScroll: 2
  };
  const { Meta } = Card;

  if (movies !== undefined) {
    return (
      <Slider {...settings}>
        {movies.results.map(movie => (
          <Col span={6} key={movie.id}>
            <Card
              hoverable
              key={movie.id}
              className="ml-auto card"
              onClick={() => onCardClick(movie.id)}
              cover={
                <img
                  alt="example"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              }
            >
              <span>
                <Rate disabled value={movie.vote_average / 2} />
                {movie.vote_average ? (
                  <span className="ant-rate-text"> {movie.vote_average}</span>
                ) : (
                  ""
                )}
              </span>
            </Card>
          </Col>
        ))}
      </Slider>
    );
  } else {
    return <Spin size="large" />;
  }
};

export default MovieSlider;
