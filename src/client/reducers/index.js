import { combineReducers } from "redux";
import counter from "./counter";
import githubUsers from "./github-users";

export default combineReducers({
  counter,
  githubUsers
});
