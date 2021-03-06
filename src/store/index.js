import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import reducers from "./reducers.js";

const rootReducer = combineReducers({
    reducers,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))