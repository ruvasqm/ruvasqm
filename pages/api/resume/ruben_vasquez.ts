import type { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Readable | any>
) {
  res.status(200).json({ message: "Hello World" });
}

export const config = {
  api: {
    responseLimit: false,
  },
};
