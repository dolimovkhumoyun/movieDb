import React from "react";
import { Descriptions, Tag, Badge } from "antd";
import NumberFormat from "react-number-format";

const DescriptionTable = ({ details }) => {
  return (
    <Descriptions title="Movie Details" className="movie-details" bordered>
      <Descriptions.Item label="Film Name" key="film_name">
        {details.title}
      </Descriptions.Item>
      <Descriptions.Item label="Tagline" key="tagline">
        {details.tagline}
      </Descriptions.Item>
      <Descriptions.Item label="Age Limit" key="age_limit">
        {details.genres.map(g => (
          <Tag color="#f50" key={g.name}>
            {g.name}
          </Tag>
        ))}
      </Descriptions.Item>
      <Descriptions.Item label="Release date" key="release_date">
        {details.release_date}
      </Descriptions.Item>
      <Descriptions.Item label="Budget" span={2} key="budget">
        <NumberFormat value={details.budget} displayType={"text"} thousandSeparator={true} prefix={"$"} />
      </Descriptions.Item>
      <Descriptions.Item label="Status" key="status" span={1}>
        <Badge status="processing" text={details.status} />
      </Descriptions.Item>
      <Descriptions.Item label="Status" span={2} key="status1">
        {details.production_companies.map(c =>
          c.logo_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${c.logo_path}`}
              id="production-company"
              alt={c.name}
              key={c.name}
              width="80px"
            />
          ) : (
            ""
          )
        )}
      </Descriptions.Item>
      <Descriptions.Item label="Overview" key="overview">
        {details.overview}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default DescriptionTable;
