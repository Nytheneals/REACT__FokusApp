import { createStore } from "redux";

// IMPORT THE ROOT REDUCER
import rootReducer from "./reducers/index";

import comments from "./data/comments";
import posts from "./data/posts";

// CREATE AN OBJECT FOR THE DEFAULT DATA
// DUMMY DATA
const defaultState = {
  posts: posts,
  comments: comments
};

//CREATING STORE

const store = createStore(rootReducer, defaultState);

export default store;
