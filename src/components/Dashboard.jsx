import React, { Component } from "react";
import SearchBar from "antd/lib/input/Search";
import Movies from "./common/Movies";

import _ from "lodash";

import { connect } from "react-redux";
import { loadMovies, loadGenres, getMovie } from "../redux/actions";

import "antd/dist/antd.css";
import "../assets/style/style.scss";
import { Pagination, Col, Row, Spin } from "antd";

class Dashboard extends Component {
  state = {
    currentPage: 1
  };

  componentDidMount() {
    this.props.loadMovies(1);
    this.props.loadGenres();
  }

  onCardClick = movie_id => {
    this.props.getMovie(movie_id);
  };

  onChange = page => {
    console.log(page);
    this.setState({ currentPage: page });
    this.props.loadMovies(page);
  };

  render() {
    const { movies, genre } = this.props;
    const loaderVisibility = movies.results !== undefined ? false : true;

    return (
      <React.Fragment>
        <div className="">
          <div className="col-md-4 searchBar ">
            <SearchBar />
          </div>
          {loaderVisibility ? (
            <Spin
              size="large"
              style={{ marginLeft: "50`%", marginTop: "15%" }}
            />
          ) : (
            <Movies
              movies={movies}
              genres={genre}
              onClick={this.onCardClick}
              onPageClick={this.onChange}
              currentPage={this.state.currentPage}
            />
          )}
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
  getMovie: movie_id => dispatch(getMovie(movie_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
