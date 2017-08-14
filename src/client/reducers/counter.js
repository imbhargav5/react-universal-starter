import { INCREMENT, DECREMENT } from "../constants";

export default function counter(state = 0, { type }) {
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
