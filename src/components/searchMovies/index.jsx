import React, { useEffect } from "react";
import MoviesContainer from "../main-page/MoviesContainer";

import { connect } from "react-redux";
import { getSearch } from "../../redux/actions";

const SearchMovie = props => {
  const { getSearch } = props;

  useEffect(() => {
    console.log("Hello");
    const { searchQuery } = props.match.params;
    getSearch(searchQuery);
    //eslint-disable-next-line
  }, []);

  const onCardClick = movie_id => {
    props.history.push(`/movie/${movie_id}`);
  };

  return (
    <div className="movie-row">
      <MoviesContainer movies={props.movies.search} onCardClick={onCardClick} />
    </div>
  );
};

const mapStateToProps = ({ movies }) => ({ movies });

const mapDispatchToProps = dispatch => ({
  getSearch: searchQuery => dispatch(getSearch(searchQuery))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);
