import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
import "./App.css";
import { useDispatch } from "react-redux";

function App() {
  return (
    <div className="App">
      <CommentBox />
      <CommentList />
    </div>
  );
}

export default App;
