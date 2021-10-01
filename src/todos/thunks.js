import { loadTodosInProgress,  loadTodosFailure, loadTodosSuccess} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
    
    try {
        // await for à response from server
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:8080/todos-delay');
        const todos = await response.json();

        // Load success action  
        dispatch(loadTodosSuccess(todos));
    }

    catch(e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }   
}

export const displayAlert = text => {
    alert(text);
}