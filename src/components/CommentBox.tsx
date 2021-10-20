import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../store/action/action";
import { useAppSelector } from "../hooks/hook";
import CommentList from "./CommentList";

function CommentBox() {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const comments = useAppSelector((state) => state.comments);
  console.log(comments.comments);
  const onClickHandler = () => {
    dispatch(addComment(comment));
    setComment("");
  };

  return (
    <div>
      <textarea
        placeholder="Comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClickHandler}>Submit</button>
      </div>
      <CommentList />
    </div>
  );
}

export default CommentBox;
