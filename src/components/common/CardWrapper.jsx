import React from "react";

import { Tooltip, Card, Button, Row, Col } from "antd";

const CardWrapper = ({ movie_details, backdropImgUrl, onAddClick }) => {
  const { Meta } = Card;

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img src={`https://image.tmdb.org/t/p/w500${backdropImgUrl}`} alt="avatar" />}
      className="movie-card"
    >
      <Row>
        <Col span={20}>
          <a href={movie_details.homepage}>
            <Tooltip placement="topLeft" title={movie_details.title}>
              <Meta title={movie_details.title} className="homepage-link" />
            </Tooltip>
          </a>
        </Col>
        <Col span={3} offset={1}>
          <Tooltip placement="topLeft" title="Add to your Movie list">
            <Button shape="circle" icon="plus" onClick={onAddClick} />
          </Tooltip>
        </Col>
      </Row>
    </Card>
  );
};

export default CardWrapper;
