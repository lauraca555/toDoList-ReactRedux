import { combineReducers, createStore } from "redux";
import {todos} from './todos/reducers';

const reducers = {
    todos,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(
    rootReducer,
    //utils de suivi devéloppement pour redux
    //window.REDUX_DEVTOOLS_EXTENSION__ && window.REDUX_DEVTOOLS_EXTENSION__()
    );