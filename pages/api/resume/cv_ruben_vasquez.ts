import type { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";
import resume from "@/resume.json";
import fs from "fs";
import path from "path";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Readable | any>
) {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      `cv_${resume.basics.name.replace(" ", "_").toLowerCase()}.pdf`
    );
    const file = fs.createReadStream(filePath);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'inline; filename="resume.pdf"');
    res.status(200).send(file);
  } catch (error: any) {
    res.status(500).json({ error });
  }
}

export const config = {
  api: {
    responseLimit: false,
  },
};
