import React from "react";
import _ from "lodash";

import { Tooltip, Card, Button, Row, Col, Rate, Icon, Tag, Spin } from "antd";

const CardWrapper = ({ movie, onCardClick, genres }) => {
  const { Meta } = Card;
  const renderGenre = (id, count) => {
    if (count >= 2) return;
    if (genres !== undefined && genres.length !== 0) {
      let genre = _.find(genres, { id: id });
      return (
        <Tag color="#f50" key={id} style={{ marginTop: "15px" }}>
          {genre.name}
        </Tag>
      );
    } else return false;
  };
  if (movie !== undefined) {
    return (
      <Card hoverable key={movie.id}>
        <Row gutter={16}>
          <Col sm={{ span: 6 }} xs={{ span: 12 }} md={{ span: 2 }}>
            <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="" />
          </Col>
          <Col sm={{ span: 6, offset: 12 }} xs={{ span: 6, offset: 6 }} md={{ span: 10, offset: 12 }}>
            <Meta title={movie.title} />
            <span>
              <Rate disabled value={movie.vote_average / 2} style={{ marginTop: "15px" }} />
            </span>
            {movie.genre_ids.map((id, index) => renderGenre(id, index))}
            <Tooltip placement="topLeft" title="Add to your Movie list">
              <Button shape="circle" icon="plus" style={{ marginTop: "15px" }} />
            </Tooltip>
            <Button
              style={{ marginTop: "15px", position: "absolute", right: 0, top: 230 }}
              onClick={() => onCardClick(movie.id)}
            >
              See details <Icon type="right" />
            </Button>
          </Col>
        </Row>
      </Card>
    );
  } else return <Spin />;
};

export default CardWrapper;
