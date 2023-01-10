import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData();
  res.end("Preview mode disable");
};
