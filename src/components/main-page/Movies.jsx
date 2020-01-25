import React, { Component } from "react";

import { Typography, Pagination, Col } from "antd";
import _ from "lodash";

import MoviesContainer from "./MoviesContainer";
import "./movies.scss";
import Skeleton from "./Skeleton";

class Movies extends Component {
  renderGenreName(genre_ids) {
    let genres = [];
    if (this.props.genres.length !== 0) {
      genre_ids.map(id => {
        const genre = _.find(this.props.genres, { id: id });
        genres.push(genre);
        return true;
      });
      return genres[0].name;
    }
  }

  render() {
    const { Title } = Typography;
    const { movies, onClick, genres, onPageClick, currentPage } = this.props;
    const popular = movies.popular !== undefined ? movies.popular : [];
    return (
      <React.Fragment>
        <div className="movie-row">
          <Title type="secondary" level={2}>
            Popular Movies:{" "}
          </Title>
          {popular.isLoading === undefined || popular.isLoading ? (
            <Skeleton />
          ) : (
            <MoviesContainer
              movies={popular || []}
              onCardClick={onClick}
              genres={genres}
              onPageClick={onPageClick}
              currentPage={currentPage}
            />
          )}
        </div>
        <Col xs={24} lg={{ span: 12, offset: 9 }} xl={{ span: 12, offset: 9 }} xxl={{ span: 12, offset: 9 }}>
          <Pagination
            total={popular.total_results}
            currentPage={currentPage}
            onChange={onPageClick}
            pageSize={20}
            style={{ marginTop: 10, padding: 10 }}
          />
        </Col>
      </React.Fragment>
    );
  }
}

export default Movies;
