import {combineReducers, legacy_createStore} from "redux";
import { postReducer } from "./Post/Post.reducer";
import {alertReducer} from "./PostAlert/alertReducer";
import { recentReducer } from "./PostRecent/recentReducer";

export const rootReducer = {
    comment:postReducer,
    alert:alertReducer,
    recent:recentReducer,
}


export const store = legacy_createStore(combineReducers(rootReducer));