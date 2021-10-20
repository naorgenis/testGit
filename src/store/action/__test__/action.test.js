import { addComment } from "../action";

describe("Add Comment", () => {
  it("has the corecct type", () => {
    const actionType = addComment();
    expect(actionType.type).toEqual("ADD_COMMENT");
  });

  it("has the correct data", () => {
    const actionData = addComment("New Comment");
    expect(actionData.data).toEqual("New Comment");
  });
});
