import { combineReducers } from "redux";

import { error } from "./error";
import { loading  } from "./loading";
import { posts } from "./posts";

const rootReducer = combineReducers({
  error,
  loading,
  posts,
});
export default rootReducer;