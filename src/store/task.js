import { createSlice } from "@reduxjs/toolkit";
import todosService from "services/todos.service";
import { setError } from "./error";

const initialState = {
  entities: [],
  isLoading: true,
};


const taskSlice = createSlice({ name: 'task', initialState, reducers: {
  recived(state, action) {
    state.entities = action.payload;
    state.isLoading = false;
  },
  update(state, action) {
    const elementIndex = state.entities.findIndex(
      (el) => el.id === action.payload.id
    );
    state.entities[elementIndex] = { ...state.entities[elementIndex], ...action.payload };
  },
  remove(state, action) {
    state.entities = state.entities.filter(i => i.id !== action.payload.id);
  },
  create(state, action) {
    state.entities.unshift({ ...action.payload.body, id: action.payload.id });
    state.isLoading = false;
  },
  taskRequested(state, action) {
    state.isLoading = true;
  },
  taskRequestFailed(state, action) {
    state.isLoading = false;
  },
} })

const { actions, reducer: taskReducer } = taskSlice
const { update, remove, recived, create, taskRequested, taskRequestFailed } = actions

export const loadTasks = () => async (dispatch, getState) => {
  try {
    dispatch(taskRequested());
    const data = await todosService.fetch();
    dispatch(recived(data));
    console.log(data);
  } catch(e) {
    dispatch(taskRequestFailed());
    dispatch(setError(e.message));
  }
}

export const createTask = () => async (dispatch, getState) => {
  try {
    dispatch(taskRequested());
    const data = await todosService.create();
    dispatch(create(data));
    console.log(data);
  } catch(e) {
    dispatch(taskRequestFailed());
    dispatch(setError(e.message));
  }
}

export const completeTask = (id) => (dispatch, getState) => {
  dispatch(update({ id, completed: true }));
}

 export function titleChanged(id) {
  return update({ id, title: `New title for ${id}` })
 }

 export function taskDeleted(id) {
  return remove({ id })
 }

 export const getTasks = () => (state) => state.tasks.entities;
 export const getTasksLoadingStatus = () => (state) => state.tasks.isLoading;

 
 export  default taskReducer;
 