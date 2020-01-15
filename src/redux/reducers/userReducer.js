const userReducer = (state = [], action) => {
  if (action.type === "SET_USER") {
    return { ...state, usrDetails: action.payload };
  }
  return state;
};

export default userReducer;
