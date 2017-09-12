import { fetchGithubUsers } from "../actions";

export const LoadGithubUsers = store => {
  return store.dispatch(fetchGithubUsers());
};
