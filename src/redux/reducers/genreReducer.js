const genreReducer = (state = [], action) => {
  if (action.type === "SET_GENRES") {
    return { ...action.genres.genres };
  }

  return state;
};

export default genreReducer;
