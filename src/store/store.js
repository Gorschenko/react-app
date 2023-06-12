import taskReducer from "./task";
import { logger } from "./middleware/logger";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import errorReducer from "./error";

const rootReducer = combineReducers({
  errors: errorReducer,
  tasks: taskReducer,
})

 export default function createStore() {
    return configureStore({
      reducer: rootReducer,
      middleware: (m) => m().concat(logger),
      devTools: process.env.NODE_ENV !== 'production'
    })
 } 