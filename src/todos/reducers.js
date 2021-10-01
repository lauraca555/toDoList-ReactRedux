import { 
    CREATE_TODO, 
    REMOVE_TODO, 
    COMPLETED_TODO,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE

} from "./actions";

//adding another reducer to our file to keep track of whether our not our todos are loading
export const isLoading = (state = false, action) => {
    const {type} = action;

    switch (type){
        case LOAD_TODOS_IN_PROGRESS: 
            return true;
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE:
            return false;
            default:
                return state;

    }

}

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isComplited: false,
            };

           return state.concat(newTodo);

        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);     

        }
        case COMPLETED_TODO: {
            const { text } = payload;
            return state.map(todo => {
                if (todo.text === text) {
                    return { ...todo, isCompleted: true };
                }
                return todo;
            });
        }
        default:
            return state;

    }
   
}