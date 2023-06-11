import { useEffect, useState } from "react";
import * as actions from "../store/actions";
import { initiateStore } from "store/store";


const store = initiateStore()

const CustomReduxPage = () => {
  const [state, setState] = useState(store.getState());
  console.log(state);

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  const completeTask = (taskId) => {
    store.dispatch(actions.taskCompleted(taskId));
  };

  const changeTitle = (taskId) => {
    store.dispatch(actions.titleChanged(taskId));
  };

  const deleteTask = (taskId) => {
    store.dispatch(actions.taskDeleted(taskId))
  }

  return (
    <>
      <h1>Redux</h1>

      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Completed: ${el.completed}`}</p>
            <button
              className="btn btn-primary m-1"
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
            <button
              className="btn btn-danger m-1"
              onClick={() => deleteTask(el.id)}
            >
              Delete task
            </button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CustomReduxPage;
