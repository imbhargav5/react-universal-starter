import {
  FETCHING_GITHUB_USERS,
  FETCHED_GITHUB_USERS,
  FETCH_GITHUB_USERS_FAIL
} from "../constants";

export default function githubUsers(
  state = {
    isLoading: false,
    data: null,
    error: null
  },
  { type, payload }
) {
  switch (type) {
    case FETCHING_GITHUB_USERS:
      return {
        isLoading: true,
        error: null,
        data: null
      };
    case FETCHED_GITHUB_USERS:
      return {
        isLoading: false,
        error: null,
        data: payload.data
      };
    case FETCH_GITHUB_USERS_FAIL:
      return {
        isLoading: false,
        data: null,
        error: payload.error
      };
    default:
      return state;
  }
}
