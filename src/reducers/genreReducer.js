import { GET_GENRES, FETCHING, SUCCESS, ERROR } from "./../constants/action";

export const genreReducer = (state = [], { type, response }) => {
  switch (type) {
    case `${GET_GENRES}_${FETCHING}`:
      return { ...state, isFetching: true };
    case `${GET_GENRES}_${SUCCESS}`:
      return { ...state, isFetching: false, response: response.data };
    case `${GET_GENRES}_${ERROR}`:
      return { ...state, isFetching: false, response: response.data };
    default:
      return state;
  }
};
