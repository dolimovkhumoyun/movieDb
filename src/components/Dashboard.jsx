import React, { Component } from "react";
import SearchBar from "antd/lib/input/Search";
import { connect } from "react-redux";

import "antd/dist/antd.css";
import "../assets/style/style.scss";
import Movies from "./common/Movies";
import { loadMovies, loadGenres, emitLogin } from "../redux/actions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.loadMovies(1);
    this.props.loadGenres();
    this.props.emitLogin("admin", "admin");
  }

  render() {
    const { movies, genre } = this.props;
    return (
      <React.Fragment>
        <div className="">
          <div className="col-md-4 searchBar ">
            <SearchBar />
          </div>
          <Movies movies={movies} genres={genre} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ movies, genre, login }) => ({
  movies,
  genre,
  login
});

const mapDispatchToProps = dispatch => ({
  loadMovies: page => dispatch(loadMovies(1)),
  loadGenres: () => dispatch(loadGenres()),
  emitLogin: (username, password) => dispatch(emitLogin(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
