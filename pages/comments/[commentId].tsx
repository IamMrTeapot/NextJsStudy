import { comments } from "../../data/comments";

function Comment({ comment = { id: 1, text: "ues" } }) {
  return (
    <div>
      {comment.id} {comment.text}
    </div>
  );
}

export default Comment;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },

      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context = { params: { commentId: "1" } }) {
  const { params } = context;
  const { commentId } = params;

  // Becuase you already have data so you should not use fetch to make it slower
  // In conclusion , you should not call an api route for pre-rendering

  // const response = await fetch(`/api/comments/${commentId}`);
  // const data = await response.json()

  const comment = comments.find(
    (comment) =>
      comment.id === parseInt(typeof commentId === "string" ? commentId : "")
  );

  return {
    props: {
      comment,
    },
  };
}
