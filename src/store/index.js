import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
// import { Action } from "redux";
// import { ThunkAction } from "redux-thunk";
// Middlewares
import logger from "redux-logger";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(logger)
});
