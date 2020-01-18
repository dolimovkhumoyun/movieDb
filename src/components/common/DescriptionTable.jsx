import React from "react";

import { Descriptions, Tag, Badge } from "antd";
import NumberFormat from "react-number-format";

const DescriptionTable = ({ movie_details }) => {
  return (
    <Descriptions title="Movie Details" className="movie-details" bordered>
      <Descriptions.Item label="Film Name" key="film_name">
        {movie_details.title}
      </Descriptions.Item>
      <Descriptions.Item label="Tagline" key="tagline">
        {movie_details.tagline}
      </Descriptions.Item>
      <Descriptions.Item label="Age Limit" key="age_limit">
        {movie_details.genres.map(g => (
          <Tag color="#f50" key={g.name}>
            {g.name}
          </Tag>
        ))}
      </Descriptions.Item>
      <Descriptions.Item label="Release date" key="release_date">
        {movie_details.release_date}
      </Descriptions.Item>
      <Descriptions.Item label="Budget" span={2} key="budget">
        <NumberFormat
          value={movie_details.budget}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </Descriptions.Item>
      <Descriptions.Item label="Status" key="status">
        <Badge status="processing" text={movie_details.status} />
      </Descriptions.Item>
      <Descriptions.Item label="Status" span={2} key="status1">
        {movie_details.production_companies.map(c =>
          c.logo_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${c.logo_path}`}
              id="production-company"
              alt={c.name}
              key={c.name}
            />
          ) : (
            ""
          )
        )}
      </Descriptions.Item>
      <Descriptions.Item label="Overview" key="overview">
        {movie_details.overview}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default DescriptionTable;
