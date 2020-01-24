import React from "react";

import { Spin, Card, Rate, Col } from "antd";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieSlider = ({ movies, onCardClick }) => {
  const { Meta } = Card;
  const settings = {
    dots: false,
    speed: 400,
    slidesToShow: 7,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          dots: false
        }
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (movies.results !== undefined && movies !== undefined) {
    const { isLoading } = movies;
    console.log(settings.slidesToShow);
    return (
      <Slider {...settings}>
        {isLoading ? (
          <Spin size="large" />
        ) : (
          movies.results.map(movie => (
            <Col span={6} key={movie.id}>
              <Card
                hoverable
                key={movie.id}
                className="card"
                onDoubleClick={() => onCardClick(movie.id)}
                cover={<img alt="example" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />}
              >
                <Meta title={movie.title} />
                <span>
                  <Rate disabled value={movie.vote_average / 2} />
                  {movie.vote_average ? <span className="ant-rate-text"> {movie.vote_average}</span> : ""}
                </span>
              </Card>
            </Col>
          ))
        )}
      </Slider>
    );
  } else {
    return <Spin size="large" />;
  }
};

export default MovieSlider;
