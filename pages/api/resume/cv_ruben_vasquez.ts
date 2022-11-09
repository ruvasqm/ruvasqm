import type { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";
import resume from "@/resume.json";
import fs from "fs";
import path from "path";

const filePath = path.resolve(
  ".",
  `public/cv_${resume.basics.name.replace(" ", "_").toLowerCase()}.pdf`
);
const pdf = fs.readFileSync(filePath);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Readable | any>
) {
  res.status(200).setHeader("Content-Type", "application/pdf").send(pdf);
}

export const config = {
  api: {
    responseLimit: false,
  },
};
