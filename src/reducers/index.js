import { combineReducers } from "redux";
import posts from "./postReducers";
// import comments from "../data/comments";
// import posts from "../data/posts";

const rootReducer = combineReducers({ posts });
export default rootReducer;
