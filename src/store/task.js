import { createAction, createSlice } from "@reduxjs/toolkit";
import todosService from "services/todos.service";

const initialState = [];


const taskSlice = createSlice({ name: 'task', initialState, reducers: {
  recived(state, action) {
    return action.payload;
  },
  update(state, action) {
    const elementIndex = state.findIndex(
      (el) => el.id === action.payload.id
    );
    state[elementIndex] = { ...state[elementIndex], ...action.payload };
  },
  remove(state, action) {
    return state.filter(i => i.id !== action.payload.id)
  }
} })

const { actions, reducer: taskReducer } = taskSlice
const { update, remove, recived } = actions

const taskRequested = createAction('task/requested');
const taskRequestFailed = createAction('task/requestFailed');

export const getTask = () => async (dispatch, getState) => {
  dispatch(taskRequested());
  try {
    const data = await todosService.fetch();
    dispatch(recived(data));
    console.log(data);
  } catch(e) {
    dispatch(taskRequestFailed(e.messsage));
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

 
 export  default taskReducer;
 