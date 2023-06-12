import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getError } from "store/error";
import { taskDeleted, titleChanged, completeTask, getTasks, loadTasks, getTasksLoadingStatus } from "store/task";

const CustomReduxPage = () => {
  const state = useSelector(getTasks());
  const isLoading = useSelector(getTasksLoadingStatus());
  const error = useSelector(getError());
  const dispatch = useDispatch();
  console.log(state);

  useEffect(() => {
    dispatch(loadTasks())
  }, []);

  const changeTitle = (taskId) => {
    dispatch(titleChanged(taskId));
  };

  const deleteTask = (taskId) => {
    dispatch(taskDeleted(taskId))
  }

  if (isLoading) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <p>{error}</p>
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
              onClick={() => dispatch(completeTask(el.id))}
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
