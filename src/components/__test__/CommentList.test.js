import CommentList from "../CommentList";
import { mount } from "enzyme";
import Root from "../../Root";

let wrapped;

beforeEach(() => {
  const initialState = { comments: ["com1", "com2"] };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("create one li per comment", () => {
  console.log(wrapped.find("li").length);
});
