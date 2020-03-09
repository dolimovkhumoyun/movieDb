export const movieReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.state];
    case "REMOVE_BOOK":
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};
