import { useEffect, useState } from "react";
import { taskDeleted, titleChanged, completeTask } from "store/task";
import configureStore from "store/store";


const store = configureStore()

const CustomReduxPage = () => {
  const [state, setState] = useState(store.getState());
  console.log(state);

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  const changeTitle = (taskId) => {
    store.dispatch(titleChanged(taskId));
  };

  const deleteTask = (taskId) => {
    store.dispatch(taskDeleted(taskId))
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
              onClick={() => store.dispatch(completeTask(el.id))}
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
