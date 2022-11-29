import type { NextApiRequest, NextApiResponse } from 'next'
import { Readable } from 'stream'
import fs from 'fs'
import path from 'path'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Readable | any>
) {
    try {
        const filePath = path.join(process.cwd(), 'README.md')
        const file = fs.createReadStream(filePath)
        res.status(200).send(file)
    } catch (error: any) {
        res.status(500).json({ error })
    }
}

export const config = {
    api: {
        responseLimit: false,
    },
}
