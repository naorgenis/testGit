import { combineReducers } from "redux";
import { commentReducer } from "./reducer";

export const reducer = combineReducers({
  comments: commentReducer,
});

export type RootState = ReturnType<typeof reducer>;
