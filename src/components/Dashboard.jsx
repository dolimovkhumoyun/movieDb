import React, { Component } from "react";
import SearchBar from "antd/lib/input/Search";
import Movies from "./main-page/Movies.jsx";

// import _ from "lodash";

import { connect } from "react-redux";
import { loadMovies, loadGenres, getMovie, getDiscovered } from "../redux/actions";
import jwt from "jsonwebtoken";

import "antd/dist/antd.css";
import "../assets/style/style.scss";
import { Row, Col, Button } from "antd";
import ProfileDropdown from "./common/ProfileDropwond.jsx";

class Dashboard extends Component {
  state = {
    currentPage: 1,
    dis_current_page: 1
  };

  componentDidMount() {
    this.props.loadMovies(1);
    this.props.getDiscovered();
    this.props.loadGenres();
  }

  onCardClick = movie_id => {
    this.props.history.push(`/movie/${movie_id}`);
  };

  onChange = (page, type) => {
    console.log(page, type);
    if (type === "popular") {
      this.setState({ currentPage: page });
      this.props.loadMovies(page);
    } else if (type === "discovered") {
      this.setState({ dis_current_page: page });
      this.props.getDiscovered(page);
    }
  };

  onLoginClick = e => {
    this.props.history.push("/login");
  };

  render() {
    const { movies, genre, user } = this.props;
    const loaderVisibility = movies.popular !== undefined ? false : true;
    const usrDetails = jwt.decode(localStorage.getItem("token"));
    const profileDropdown = usrDetails.data ? (
      <Col span={2} offset={6}>
        <ProfileDropdown profile={usrDetails.data} />
      </Col>
    ) : (
      <Col span={2} offset={8}>
        <Button icon="login" onClick={this.onLoginClick}>
          Login
        </Button>
      </Col>
    );

    return (
      <React.Fragment>
        <div className="">
          <Row style={{ marginTop: 40 }}>
            <Col span={6} offset={8}>
              <SearchBar />
            </Col>

            {profileDropdown}
          </Row>
          <Movies
            movies={movies}
            genres={genre}
            onClick={this.onCardClick}
            onPageClick={this.onChange}
            currentPage={this.state.currentPage}
            disCurrentPage={this.state.dis_current_page}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ movies, genre, user }) => ({
  movies,
  genre,
  user
});

const mapDispatchToProps = dispatch => ({
  loadMovies: page => dispatch(loadMovies(page)),
  loadGenres: () => dispatch(loadGenres()),
  getMovie: movie_id => dispatch(getMovie(movie_id)),
  getDiscovered: page => dispatch(getDiscovered(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
