import type { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Readable | any>
) {
  res.status(200).setHeader("Content-Type", "application/pdf");
  Readable.from("@public/cv_ruben_vasquez.pdf").pipe(res);
}

export const config = {
  api: {
    responseLimit: false,
  },
};
