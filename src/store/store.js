import taskReducer from "./task";
import { logger } from "./middleware/logger";
import { configureStore } from "@reduxjs/toolkit";

 export default function createStore() {
    return configureStore({
      reducer: taskReducer,
      middleware: (m) => m().concat(logger),
      devTools: process.env.NODE_ENV !== 'production'
    })
 } 