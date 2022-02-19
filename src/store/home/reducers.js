import MockData from "../../constant";
import { GET_DATA, SET_DATA } from "./types";

const initialDatasetState = {
  data: [],
  errorMessage: "",
};

export const selectors = {
  dataResult: (state) => state['dataReducer'].data,
};


export function dataReducer(state = initialDatasetState, action) {
  switch (action.type) {
    case GET_DATA:
      return Object.assign({}, state, {
        data: MockData,
      });

    case SET_DATA:
      return Object.assign({}, state, {
        data: action.data.data,
      });
    default:
      return state;
  }
}
