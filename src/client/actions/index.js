import fetch from "isomorphic-fetch";
import {
  INCREMENT,
  DECREMENT,
  FETCHING_GITHUB_USERS,
  FETCHED_GITHUB_USERS,
  FETCH_GITHUB_USERS_FAIL
} from "../constants";

export function incrementCounter() {
  return {
    type: INCREMENT
  };
}

export function decrementCounter() {
  return {
    type: DECREMENT
  };
}

export function fetchingGithubUsers() {
  return {
    type: FETCHING_GITHUB_USERS,
    payload: {}
  };
}
export function fetchedGithubUsers(data) {
  return {
    type: FETCHED_GITHUB_USERS,
    payload: {
      data
    }
  };
}
export function fetchGithubUsersFail(error) {
  return {
    type: FETCH_GITHUB_USERS_FAIL,
    payload: {
      error
    }
  };
}

export function fetchGithubUsers() {
  return (dispatch, getState) => {
    const state = getState();
    if (state.githubUsers.data) {
      return;
    }
    dispatch(fetchingGithubUsers());
    return fetch("https://api.github.com/users")
      .then(data => data.json())
      .then(data => {
        return dispatch(fetchedGithubUsers(data));
      })
      .catch(error => {
        return dispatch(fetchGithubUsersFail(error));
      });
  };
}
