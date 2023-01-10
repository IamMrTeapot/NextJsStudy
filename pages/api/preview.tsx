import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.setPreviewData({ user: "Cha" });
  res.end("Preview mode enable");

  //res.redirect(req.query.redirect);
};
