import React, { Component } from "react";

import { Row, Typography, Pagination, Col } from "antd";
import _ from "lodash";

import MovieSlider from "../common/Slider";
import "../main-page/movies.scss";
import MoviesContainer from "../common/MoviesContainer";

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
    const { movies, onClick, onPageClick, currentPage } = this.props;
    const popular = movies.popular !== undefined ? movies.popular : [];
    const discovered = movies.discovered !== undefined ? movies.discovered : [];

    return (
      <React.Fragment>
        <div className="movie-row">
          <Row>
            <Title type="secondary" level={2}>
              Popular Movies:{" "}
            </Title>
            <MovieSlider movies={popular || []} onCardClick={onClick} />
            <Pagination
              defaultCurrent={currentPage}
              total={(popular.total_results / 20) | 500}
              className="pagination"
              onChange={onPageClick}
            />
          </Row>
        </div>
        <div className="movie-row" style={{ marginTop: 40 }}>
          <Row>
            <Title type="secondary" level={2}>
              Discovering Movies:{" "}
            </Title>
            <MovieSlider movies={discovered || []} onCardClick={onClick} />
            <Pagination defaultCurrent={0} total={500} className="pagination" />
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
