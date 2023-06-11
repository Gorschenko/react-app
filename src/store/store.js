 import { compose, createStore, applyMiddleware } from "redux";
 import taskReducer from "./task";
import { logger } from "./middleware/logger";
import { thunk } from "./middleware/thunk";

const  middlewareEnhancer = applyMiddleware(logger, thunk)

 export default function configureStore() {
    return createStore(taskReducer, compose(middlewareEnhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
 }