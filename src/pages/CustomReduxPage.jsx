import { useEffect, useState } from "react";
import { createStore } from "store/createStore";
import { taskReducer } from "store/taskReducer";
import * as actions from "../store/actionTypes";

const initialState = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false },
];

const store = createStore(taskReducer, initialState);

const CustomReduxPage = () => {
  const [state, setState] = useState(store.getState());
  console.log(state);

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  const completeTask = (taskId) => {
    store.dispatch({
      type: actions.taskUpdated,
      payload: { id: taskId, completed: true },
    });
  };

  const changeTitle = (taskId) => {
    store.dispatch({
      type: actions.taskUpdated,
      payload: { id: taskId, title: `New title for ${taskId}` },
    });
  };

  return (
    <>
      <h1>Redux</h1>

      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Completed: ${el.completed}`}</p>
            <button
              className="btn btn-primary m-2"
              onClick={() => completeTask(el.id)}
            >
              Complete
            </button>
            <button
              className="btn btn-primary"
              onClick={() => changeTitle(el.id)}
            >
              Change title
            </button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CustomReduxPage;
