import React, { Component } from "react";
import SearchBar from "antd/lib/input/Search";
import Movies from "./main-page/Movies.jsx";

// import _ from "lodash";

import { connect } from "react-redux";
import {
  loadMovies,
  loadGenres,
  getMovie,
  getDiscovered
} from "../redux/actions";

import "antd/dist/antd.css";
import "../assets/style/style.scss";
import { Row, Col } from "antd";

class Dashboard extends Component {
  state = {
    currentPage: 1
  };

  componentDidMount() {
    this.props.loadMovies(1);
    this.props.getDiscovered();
    this.props.loadGenres();
  }

  onCardClick = movie_id => {
    this.props.history.push(`/movie/${movie_id}`);
  };

  onChange = page => {
    console.log(page);
    this.setState({ currentPage: page });
    this.props.loadMovies(page);
  };

  render() {
    const { movies, genre } = this.props;
    const loaderVisibility = movies.popular !== undefined ? false : true;

    return (
      <React.Fragment>
        <div className="">
          <Row style={{ marginTop: 40 }}>
            <Col span={6} offset={8}>
              <SearchBar />
            </Col>
          </Row>
          <Movies
            movies={movies}
            genres={genre}
            onClick={this.onCardClick}
            onPageClick={this.onChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ movies, genre }) => ({
  movies,
  genre
});

const mapDispatchToProps = dispatch => ({
  loadMovies: page => dispatch(loadMovies(page)),
  loadGenres: () => dispatch(loadGenres()),
  getMovie: movie_id => dispatch(getMovie(movie_id)),
  getDiscovered: () => dispatch(getDiscovered())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
