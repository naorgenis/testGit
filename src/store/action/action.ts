import { Dispatch } from "redux";

export interface AddComment {
  type: string;
  data: string;
}

export const addComment = (comment: string): AddComment => {
  return {
    type: "ADD_COMMENT",
    data: comment,
  };
};
