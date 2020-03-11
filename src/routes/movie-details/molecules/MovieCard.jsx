import React from "react";
import { Tooltip, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const MovieCard = ({ movie }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        width="100%"
        height="100%"
        alt="Card cap"
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <Tooltip placement="topLeft" title="Add to your Movie list">
          <Button type="circle" icon={<PlusOutlined />} size="large" />
        </Tooltip>
      </div>
    </div>
  );
};

export default MovieCard;
