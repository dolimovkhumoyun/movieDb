import React, { Component } from "react";

import { Spin, Card, Row, Col } from "antd";

import { connect } from "react-redux";
import { getMovie, loadGenres } from "../../../redux/actions";

import "./index.scss";

class Movie extends Component {
  state = {};

  componentDidMount() {
    let movie_id = this.props.match.params.id;
    this.props.getMovie(movie_id);
  }

  render() {
    const { Meta } = Card;

    const { movie_details } = this.props.movies;
    if (movie_details !== undefined) {
      const backdropImgUrl = movie_details.poster_path;
      return (
        <React.Fragment>
          <div>
            <Row>
              <Col md={8}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      src={`https://image.tmdb.org/t/p/w500${backdropImgUrl}`}
                      alt="avatar"
                    />
                  }
                  className="movie-card"
                >
                  <Meta
                    title={movie_details.title}
                    description={movie_details.homepage}
                  />
                </Card>
              </Col>
              <Col md={4}>
                <h4>{movie_details.title}</h4>
              </Col>
            </Row>
          </div>
        </React.Fragment>
      );
    } else {
      return <Spin size="large" />;
    }
  }
}

const mapStateToProps = ({ movies, genre }) => ({
  movies,
  genre
});

const mapDispatchToProps = dispatch => ({
  getMovie: movie_id => dispatch(getMovie(movie_id)),
  loadGenres: () => dispatch(loadGenres())
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
