import React from "react";

import { Row, Col, Card, Spin, Rate } from "antd";

const MoviesContainer = ({ movies, onCardClick }) => {
  const { Meta } = Card;
  if (movies.results !== undefined && movies !== undefined) {
    return (
      <React.Fragment>
        <Row gutter={8}>
          {movies.results.map(movie => (
            <Col span={4} key={movie.id} style={{ marginTop: 30 }}>
              <Card
                hoverable
                key={movie.id}
                className="ml-auto card"
                onDoubleClick={() => onCardClick(movie.id)}
                cover={<img alt="example" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />}
              >
                <Meta title={movie.title} />
                <span>
                  <Rate disabled value={movie.vote_average / 2} />
                  {movie.vote_average ? <span className="ant-rate-text"> {movie.vote_average}</span> : ""}
                </span>
              </Card>
            </Col>
          ))}
        </Row>
      </React.Fragment>
    );
  } else {
    return <Spin size="large" />;
  }
};

export default MoviesContainer;
