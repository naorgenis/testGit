import { commentReducer } from "../reducer";

it("handel action of type ADD_COMMENT", () => {
  const action = {
    type: "ADD_COMMENT",
    data: "New Comment",
  };
  let state = {
    comments: [],
  };
  const reducer = commentReducer(state, action);
  expect(reducer.comments).toEqual(["New Comment"]);
});

it("Handels action with unkown type", () => {
  const action = {
    type: "test",
    data: "New Comment",
  };
  let state = {
    comments: [],
  };
  const reducer = commentReducer(state, action);
  expect(reducer.comments).toEqual([]);
});
