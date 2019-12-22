const movieReducer = (state = [], action) => {
  if (action.type === "LOAD_SUCCESS") {
    return {
      ...action.movies
    };
  }

  if (action.type === "SET_MOVIE") {
    return {
      ...state,
      movie_details: action.payload
    };
  }

  if (action.type === "SET_RELATED") {
    return {
      ...state,
      related_movies: action.payload
    };
  }
  return state;
};

export default movieReducer;
