import React, { Component } from "react";

import {
  Spin,
  Card,
  Row,
  Col,
  Typography,
  Descriptions,
  Badge,
  Avatar,
  Icon,
  Tag,
  Button
} from "antd";
import NumberFormat from "react-number-format";

import { connect } from "react-redux";
import { getMovie, loadGenres, getRelatedMovies } from "../../../redux/actions";

import "./index.scss";
import MovieSlider from "../Slider";

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
              <Col md={5}>
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
                  <a href={movie_details.homepage}>
                    <Meta
                      title={movie_details.title}
                      className="homepage-link"
                    />
                  </a>
                </Card>
              </Col>
              <Col md={16}>
                <div className="movie-info">
                  <Title level={2} id="title">
                    {movie_details.title}
                  </Title>
                  <Button onClick={this.onPrevClick}>
                    <Icon type="left" />
                    Main Page
                  </Button>
                  <Descriptions
                    title="Movie Details"
                    className="movie-details"
                    bordered
                  >
                    <Descriptions.Item label="Film Name">
                      {movie_details.title}
                    </Descriptions.Item>
                    <Descriptions.Item label="Tagline">
                      {movie_details.tagline}
                    </Descriptions.Item>
                    <Descriptions.Item label="Age Limit">
                      {movie_details.genres.map(g => (
                        <Tag color="#f50">{g.name}</Tag>
                      ))}
                    </Descriptions.Item>
                    <Descriptions.Item label="Release date">
                      {movie_details.release_date}
                    </Descriptions.Item>
                    <Descriptions.Item label="Budget" span={2}>
                      <NumberFormat
                        value={movie_details.budget}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                    </Descriptions.Item>
                    <Descriptions.Item label="Status">
                      <Badge status="processing" text={movie_details.status} />
                    </Descriptions.Item>
                    <Descriptions.Item label="Status" span={2}>
                      {movie_details.production_companies.map(c =>
                        c.logo_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w500${c.logo_path}`}
                            id="production-company"
                            alt={c.name}
                          />
                        ) : (
                          c.name
                        )
                      )}
                      {/* <Avatar
                          src={`https://image.tmdb.org/t/p/w500${c.logo_path}`}
                        /> */}
                    </Descriptions.Item>
                    <Descriptions.Item label="Overview">
                      {movie_details.overview}
                    </Descriptions.Item>
                  </Descriptions>
                </div>
              </Col>
            </Row>
            <div className="related-movies">
              <MovieSlider
                movies={related_movies}
                onCardClick={this.onCardClick}
              />
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
