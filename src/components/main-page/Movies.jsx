import React, { Component } from "react";

import { Row, Typography } from "antd";
import _ from "lodash";

import MovieSlider from "../common/Slider";
import "../main-page/movies.scss";

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
    const { movies, onClick } = this.props;
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
          </Row>
        </div>
        <div className="movie-row" style={{ marginTop: 40 }}>
          <Row>
            <Title type="secondary" level={2}>
              Discovering Movies:{" "}
            </Title>
            <MovieSlider movies={discovered || []} onCardClick={onClick} />
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
