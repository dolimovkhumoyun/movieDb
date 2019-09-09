import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import genreReducer from "./genreReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  genre: genreReducer,
  login: loginReducer
});

export default rootReducer;
