import React, { useEffect } from "react";
import MoviesContainer from "../common/MoviesContainer";

import { connect } from "react-redux";
import { getSearch } from "../../redux/actions";

const SearchMovie = props => {
  useEffect(() => {
    const searchQuery = props.match.params.searchQuery;
    props.getSearch(searchQuery);
  }, []);

  const onCardClick = movie_id => {
    props.history.push(`/movie/${movie_id}`);
  };

  return <MoviesContainer movies={props.movies.search} onCardClick={onCardClick} />;
};

const mapStateToProps = ({ movies }) => ({ movies });

const mapDispatchToProps = dispatch => ({
  getSearch: searchQuery => dispatch(getSearch(searchQuery))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);
