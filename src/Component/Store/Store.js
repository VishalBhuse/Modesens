import {legacy_createStore} from "redux";
import { postReducer } from "./Post.reducer";


export const store = legacy_createStore(postReducer);