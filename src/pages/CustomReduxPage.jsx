import * as React from "react";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "task/completed": {
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex].completed = true;
      return newArray;
    }
    default:
      break;
  }
};

const createStore = (reducer, initialState) => {
  let state = initialState;

  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
  };

  return { getState, dispatch };
};

const store = createStore(taskReducer, [
  { id: 1, description: "Task 1", completed: false },
  { id: 2, description: "Task 2", completed: false },
]);

const CustomReduxPage = () => {
  const state = store.getState();
  console.log(state);

  const completeTask = (taskId) => {
    store.dispatch({ type: "task/completed", payload: { id: taskId } });
    console.log(store.getState());
  };

  return (
    <>
      <h1>Redux</h1>

      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.description}</p>
            <p>{`Completed: ${el.completed}`}</p>
            <button
              className="btn btn-primary"
              onClick={() => completeTask(el.id)}
            >
              Complete
            </button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CustomReduxPage;
