import { GET_MOVIES, FETCHING, SUCCESS, ERROR } from "../constants/action";

export const moviesReducer = (state = [], { type, response }) => {
  switch (type) {
    // MOVIES

    case `${GET_MOVIES}_${FETCHING}`:
      return { ...state, isFetching: true, response: [] };
    case `${GET_MOVIES}_${SUCCESS}`:
      return { ...state, isFetching: false, response: response.data };
    case `${GET_MOVIES}_${ERROR}`:
      return { ...state, isFetching: false, response: response.data };

    default:
      return state;
  }
};
