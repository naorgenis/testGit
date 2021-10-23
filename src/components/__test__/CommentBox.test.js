import React from "react";
import { mount, unmount } from "enzyme";
import CommentBox from "../CommentBox";
import Root from "../../Root";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("textarea test", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "newComment" },
    });

    wrapped.update();
  });
  it("user can type in the textarea", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("newComment");
  });

  it("textarea empty after click on button", () => {
    wrapped.find("button").simulate("click");

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
