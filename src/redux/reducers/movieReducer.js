const movieReducer = (state = [], action) => {
  if (action.type === "LOAD") {
    return {
      ...state,
      popular: { results: [], isLoading: true }
    };
  }

  if (action.type === "LOAD_SUCCESS") {
    return {
      ...state,
      popular: { ...action.movies, isLoading: false }
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

  if (action.type === "GET_DISCOVERED") {
    return {
      ...state,
      discovered: { results: [], isLoading: true }
    };
  }

  if (action.type === "SET_DISCOVERED") {
    return {
      ...state,
      discovered: { ...action.payload, isLoading: false }
    };
  }

  return state;
};

export default movieReducer;
