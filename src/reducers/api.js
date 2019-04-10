import { createStore, applyMiddleware } from "redux";

const reducer = combineReducers({
    api
});
const store = createStore(reducer, applyMiddleware(thunk))