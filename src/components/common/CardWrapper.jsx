import React from "react";

import { Card } from "antd";

const CardWrapper = ({ movie_details, backdropImgUrl }) => {
  const { Meta } = Card;

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          src={`https://image.tmdb.org/t/p/w500${backdropImgUrl}`}
          alt="avatar"
        />
      }
      className="movie-card"
    >
      <a href={movie_details.homepage}>
        <Meta title={movie_details.title} className="homepage-link" />
      </a>
    </Card>
  );
};

export default CardWrapper;
