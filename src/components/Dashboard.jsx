import React, { useState } from "react";
import SearchBar from "./common/SearchBar";
import Movies from "./main-page/Movies.jsx";

import { connect } from "react-redux";
import { loadMovies, loadGenres, getMovie, getDiscovered } from "../redux/actions";
import jwt from "jsonwebtoken";

import "antd/dist/antd.css";
import "../assets/style/style.scss";
import { Row, Col, Button } from "antd";
import ProfileDropdown from "./common/ProfileDropDown.jsx";
import { useEffect } from "react";

const Dashboard = props => {
  const { movies, genre } = props;
  const [cur_page, setCurPage] = useState(1);
  const [dis_current_page, setDisCurPage] = useState(1);
  const usrDetails = jwt.decode(localStorage.getItem("token"));

  useEffect(() => {
    props.loadMovies(1);
    props.getDiscovered(1);
    props.loadGenres();
    // eslint-disable-next-line
  }, []);

  const onChange = page => {
    setCurPage(page);
    props.loadMovies(page);
  };

  const onLoginClick = e => {
    props.history.push("/login");
  };

  const onCardClick = movie_id => {
    props.history.push(`/movie/${movie_id}`);
  };
  const onSearch = value => {
    props.history.push(`/search/movie/${value}`);
  };

  const profileDropdown =
    usrDetails !== null ? (
      <Col span={2} offset={6}>
        <ProfileDropdown profile={usrDetails.data} />
      </Col>
    ) : (
      <Col span={2} offset={8}>
        <Button icon="login" onClick={onLoginClick}>
          Login
        </Button>
      </Col>
    );

  return (
    <React.Fragment>
      <div className="">
        <Row style={{ marginTop: 40 }}>
          <Col span={6} offset={8}>
            <SearchBar onSearch={onSearch} />
          </Col>

          {profileDropdown}
        </Row>
        <Movies
          movies={movies}
          genres={genre}
          onClick={onCardClick}
          onPageClick={onChange}
          currentPage={cur_page}
        />
      </div>
    </React.Fragment>
  );
};

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
