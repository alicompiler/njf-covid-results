import {createStore, applyMiddleware, combineReducers} from "redux";
import {createLogger} from "redux-logger";
import thunk from 'redux-thunk';
import {Reducers} from "./Reducers";

let middleware: any;

if (process.env.NODE_ENV === "development") {
    middleware = applyMiddleware(thunk, createLogger(),);
} else {
    middleware = applyMiddleware(thunk);
}

const store = createStore(combineReducers(Reducers), middleware);

export default store;