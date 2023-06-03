import * as React from "react";

const createStore = (initialState) => {
    let state = initialState

    const getState = () => state
    const dispatch = (action) => {
        if (action.type === 'task/completed') {
            const newArray = [...state]
            const elementIndex = newArray.findIndex(el => el.id === action.payload.id)
            newArray[elementIndex].completed = true
            state = newArray
            console.log(state)
        }
    }

    return {getState, dispatch}
}

const store = createStore([{id: 1, description: 'Task 1', completed: false}])

const CustomReduxPage = () => {
    console.log(store.getState())
   
    return <>
        <h1>Redux</h1>
        <button className="btn btn-primary" onClick={() =>  store.dispatch({type: 'task/completed', payload: { id: 1 }})}>Complete</button>
    </>
};

export default CustomReduxPage;
