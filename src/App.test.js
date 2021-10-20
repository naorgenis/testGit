import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";

let warpped;
beforeEach(() => {
  warpped = shallow(<App />);
});

test("Show comment box", () => {
  expect(warpped.find(CommentBox).length).toEqual(1);
});

test("Show comment List", () => {
  expect(warpped.find(CommentList).length).toEqual(1);
});
