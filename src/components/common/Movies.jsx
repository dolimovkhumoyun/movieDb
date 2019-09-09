import React, { Component } from "react";

import { Card, Col, Row } from "antd";
import _ from "lodash";
// import { getMovies } from "../../redux/api";

const { Meta } = Card;

class Movies extends Component {
  data = [];

  renderGenreName(genre_ids) {
    const genres = this.props.genres;
    if (!_.isEmpty(genres)) {
      const genre_name = genre_ids.map(ids => {
        return _.filter(genres, { id: ids });
      });
      const genre_names = genre_name.map(n => {
        return n.name + " ";
      });
      // console.log(genre_names);
    }
    // return;
  }

  render() {
    const { movies, genres } = this.props;
    return (
      <React.Fragment>
        <div className="container-fluid movie-cards">
          {" "}
          <Row gutter={16} className="movie-row">
            {movies.map(movie => (
              <Col span={6}>
                <Card
                  hoverable
                  className="ml-auto card"
                  cover={
                    <img
                      alt="example"
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                  }
                >
                  <Meta
                    title={movie.original_title}
                    description={this.renderGenreName(movie.genre_ids)}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
