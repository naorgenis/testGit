import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./store/reducer/index";

interface initialState {
  comments: string[];
}

type Props = {
  children: JSX.Element;
  initialState: {};
};

export default ({ children, initialState = {} }: Props) => {
  return (
    <Provider store={createStore(reducer, initialState)}>{children}</Provider>
  );
};
