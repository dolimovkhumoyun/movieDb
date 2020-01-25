import React, { Component } from "react";

import { Spin, Row, Col, Typography, Icon, Button } from "antd";

import { connect } from "react-redux";
import { getMovie, loadGenres, getRelatedMovies } from "../../redux/actions";

import "./index.scss";
import MovieSlider from "../common/Slider";
import DescriptionTable from "../common/DescriptionTable";
import CardWrapper from "../common/CardWrapper";

import jwt from "jsonwebtoken";
import axios from "axios";
import CustomCard from "./CustomCard";

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

  onAddClick = async movie => {
    const user_details = jwt.decode(localStorage.getItem("token"));
    const movie_details = {
      user_id: user_details.data.id,
      movie_id: movie.id,
      movie_title: movie.original_title,
      vote_average: movie.vote_average,
      poster_path: movie.poster_path,
      token: localStorage.getItem("token")
    };
    const response = await axios.post("https://dolimovs.studio:8080/fav", movie_details);
    console.log(response);
  };

  render() {
    const { Title } = Typography;

    const { movie_details, related_movies } = this.props.movies;
    console.log(movie_details);
    if (movie_details !== undefined) {
      const backdropImgUrl = movie_details.poster_path;
      return (
        <React.Fragment>
          <div>
            <Row>
              <div className="movie-card">
                <Col md={5}>
                  <CustomCard
                    movie={movie_details}
                    backdropImgUrl={backdropImgUrl}
                    onAddClick={() => this.onAddClick(movie_details)}
                  />
                </Col>
              </div>
              <Col md={16}>
                <div className="movie-info">
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
                <MovieSlider movies={related_movies || []} onCardClick={this.onCardClick} />
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
