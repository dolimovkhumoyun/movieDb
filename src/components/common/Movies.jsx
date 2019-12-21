import React, { Component } from "react";

import { Card, Col, Row, Rate, Pagination } from "antd";
import _ from "lodash";
// import { getMovies } from "../../redux/api";

const { Meta } = Card;

class Movies extends Component {
  data = [];

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
    const { movies, onClick } = this.props;
    const results = movies.results !== undefined ? movies.results : [];
    return (
      <React.Fragment>
        <div className="container-fluid movie-cards">
          {" "}
          <Row gutter={16} className="movie-row">
            {results.map(movie => (
              <Col span={6} key={movie.id}>
                <Card
                  hoverable
                  key={movie.id}
                  className="ml-auto card"
                  onClick={() => onClick(movie.id)}
                  cover={
                    <img
                      alt="example"
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                  }
                >
                  <Meta
                    title={movie.title}
                    description={this.renderGenreName(movie.genre_ids)}
                  />
                  <span>
                    <Rate disabled value={movie.vote_average / 2} />
                    {movie.vote_average ? (
                      <span className="ant-rate-text">
                        {" "}
                        {movie.vote_average}
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <Row>
          <Col span={8} offset={10} align={"bottom"} className="mt-4 mb-4">
            {" "}
            <Pagination
              current={this.props.currentPage}
              total={movies.total_pages}
              onChange={this.props.onPageClick}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Movies;
