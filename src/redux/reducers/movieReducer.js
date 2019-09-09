const movieReducer = (state = [], action) => {
  if (action.type === "LOAD_SUCCESS") {
    return [...action.movies.results];
  }

  return state;
};

export default movieReducer;
