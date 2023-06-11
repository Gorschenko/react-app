 import { createStore } from "redux";
 import taskReducer from "./task";



 export default function configureStore() {
    return createStore(taskReducer)
 }