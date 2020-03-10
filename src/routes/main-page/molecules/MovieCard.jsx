import React from "react";
import find from "lodash/find";
import { Tag, Rate, Button, Tooltip } from "antd";
import { tagColor } from "./../../../constants/coolors";

import { PlusOutlined } from "@ant-design/icons";

const MovieCard = ({ item, genres }) => {
  const renderGenres = id => {
    if (!genres.isFetching) {
      let tmpGenre = find(genres.response.genres, { id: id });
      let tags = (
        <Tag color={tagColor[id % 10]} className="m-1" key={tmpGenre.name + id}>
          {tmpGenre.name}
        </Tag>
      );
      return tags;
    } else return false;
  };

  const truncate = string => {
    return string.length > 15 ? string.substr(0, 15 - 1) + "..." : string;
  };
  return (
    <div className="card shadow-sm">
      <div className="row">
        <div className="col-md-6">
          <img
            className="card-img-top img-responsive"
            src={
              item.poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : "https://via.placeholder.com/300x270"
            }
            alt="Card_image_cap"
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <p className="h6">
              <Tooltip title={item.title}>{truncate(item.title)}</Tooltip>
            </p>
            <p className="card-text">{item.release_date}</p>
            {item.genre_ids.map(id => renderGenres(id))}
            <Tooltip title="Add to my list">
              <Button type="circle" icon={<PlusOutlined />} size="large" />
            </Tooltip>
            <Rate
              disabled
              defaultValue={2}
              style={{ position: "absolute", bottom: "10px", left: "20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
