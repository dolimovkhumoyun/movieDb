import React from "react";
import { Tooltip, Card, Button } from "antd";

const CustomCard = ({ movie }) => {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      key={movie.id}
      style={{ width: 200 }}
      cover={<img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="" />}
    >
      <Meta title={movie.title} />
      <Tooltip placement="topLeft" title="Add to your Movie list">
        <Button shape="circle" icon="plus" style={{ marginTop: "15px" }} />
      </Tooltip>
    </Card>
  );
};

export default CustomCard;
