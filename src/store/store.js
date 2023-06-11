 import { createStore } from "redux";
 import taskReducer from "./task";



 export default function configureStore() {
    return createStore(taskReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 }