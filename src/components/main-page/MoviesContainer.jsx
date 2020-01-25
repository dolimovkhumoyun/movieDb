import React from "react";
import _ from "lodash";

import { Row, Spin, Col } from "antd";
import "./movies.scss";
import CardWrapper from "../common/CardWrapper";

const MoviesContainer = ({ movies, genres, onCardClick, onChange }) => {
  if (movies !== undefined && movies.results !== undefined) {
    return (
      <React.Fragment>
        <Row gutter={[16, 16]}>
          {movies.results.map(movie => (
            <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={6} key={movie.id}>
              <CardWrapper movie={movie} onCardClick={onCardClick} genres={genres} />
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
