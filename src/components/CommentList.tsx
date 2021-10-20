import { useAppSelector } from "../hooks/hook";

function CommentList() {
  const comments = useAppSelector((state) => state.comments.comments);

  const renderComments = () => {
    return comments.map((comment) => <li key={comment}>{comment}</li>);
  };
  return (
    <div>
      <ul>{renderComments()}</ul>
    </div>
  );
}

export default CommentList;
