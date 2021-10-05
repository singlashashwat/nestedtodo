import { GET_DATA, SET_FILTER } from "./types";

const initialDatasetState = {
  data: [],
  filter: "",
  errorMessage: "",
};

export function dataReducer(state = initialDatasetState, action) {
  switch (action.type) {
    case `${GET_DATA}_REQUEST`:
      return Object.assign({}, state, { errorMessage: "" });
    case `${GET_DATA}_SUCCESS`:
      return Object.assign({}, state, {
        data: action.data.slice(0, 10),
      });
    case `${GET_DATA}_FAILURE`:
      return Object.assign({}, state, { errorMessage: action.error });

    case SET_FILTER:
      return Object.assign({}, state, {
        filter: action.data.filter,
      });
    default:
      return state;
  }
}
