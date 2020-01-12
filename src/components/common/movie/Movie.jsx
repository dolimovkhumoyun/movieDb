import React, { Component } from "react";

import { Spin, Card, Row, Col, Typography, Icon, Button } from "antd";

import { connect } from "react-redux";
import { getMovie, loadGenres, getRelatedMovies } from "../../../redux/actions";

import "./index.scss";
import MovieSlider from "../Slider";
import DescriptionTable from "../DescriptionTable";
import CardWrapper from "../CardWrapper";

class Movie extends Component {
  state = {};

  componentDidMount() {
    let movie_id = this.props.match.params.id;
    this.props.getMovie(movie_id);
    this.props.getRelatedMovies(movie_id);
  }

  onCardClick = movie_id => {
    this.props.getMovie(movie_id);
    this.props.getRelatedMovies(movie_id);
  };

  onPrevClick = e => {
    this.props.history.push("/");
  };

  render() {
    const { Meta } = Card;
    const { Title } = Typography;

    const { movie_details, related_movies } = this.props.movies;

    if (movie_details !== undefined) {
      const backdropImgUrl = movie_details.poster_path;
      return (
        <React.Fragment>
          <div>
            <Row>
              <div className="movie-card">
                <Col md={5}>
                  <CardWrapper
                    movie_details={movie_details}
                    backdropImgUrl={backdropImgUrl}
                  />
                </Col>
              </div>
              <Col md={16}>
                <div className="movie-info">
                  <Title level={2} id="title">
                    {movie_details.title}
                  </Title>
                  <Button onClick={this.onPrevClick}>
                    <Icon type="left" />
                    Main Page
                  </Button>
                  <DescriptionTable movie_details={movie_details} />
                </div>
              </Col>
            </Row>
            <div className="related-movies">
              <Row>
                <MovieSlider
                  movies={related_movies || []}
                  onCardClick={this.onCardClick}
                />
              </Row>
            </div>
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
  loadGenres: () => dispatch(loadGenres()),
  getRelatedMovies: genres => dispatch(getRelatedMovies(genres))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
