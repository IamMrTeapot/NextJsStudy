import type { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../data/comments";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { commentId } = req.query;
  const comment = comments.find(
    (comment) =>
      comment.id === parseInt(typeof commentId === "string" ? commentId : "1")
  );
  res.status(200).json(comment);
};
