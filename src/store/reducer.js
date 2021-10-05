import { combineReducers } from "redux";
// Reducers
import { dataReducer } from "./home/reducers";

export const rootReducer = combineReducers({
  dataReducer: dataReducer,
});
