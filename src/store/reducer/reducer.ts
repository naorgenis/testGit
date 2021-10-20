import { AddComment } from "../action/action";

export interface StateReducer {
  comments: string[];
}

const InitialState: StateReducer = {
  comments: [],
};

export const commentReducer = (
  state: StateReducer = InitialState,
  action: AddComment
): StateReducer => {
  switch (action.type) {
    case "ADD_COMMENT":
      state.comments.push(action.data);
      return state;
    default:
      return state;
  }
};
