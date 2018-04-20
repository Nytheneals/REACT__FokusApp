import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

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
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
