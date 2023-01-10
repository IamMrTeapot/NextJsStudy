import { useState } from "react";
import CommentId from "../api/comments/[commentId]";

function CommentPage() {
  const [comments, setComments] = useState([{ id: 1, text: "init" }]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  const deleteComment = async (commentId: number) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default CommentPage;
