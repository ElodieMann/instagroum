import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import user from "./redux/user";

const reducers = combineReducers({
  user,
});

const middleware = (getDefaultMiddleware) => {
  if (process.env.NODE_ENV === "development") {
    return [...getDefaultMiddleware(), logger];
  }
  return getDefaultMiddleware();
};

const store = configureStore({
  reducer: reducers,
  middleware: middleware,  
});

export { store };
