// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import resume from '@resume.json'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<typeof resume>
) {
    res.status(200).json(resume)
}
