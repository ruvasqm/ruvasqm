import { ImageResponse } from '@vercel/og'
// TODO: go back to typescript when ImageResponse type is fixed
// import { NextRequest } from 'next/server';
import '@styles/globals.css'

// enable experimental edage

export const config = {
    runtime: 'experimental-edge',
}
// ?width=<width>&height=<height>
export default function handler(req) {
    try {
        //  get searchParams
        const { searchParams } = new URL(req.url)

        const hasWidth = searchParams.has('width')

        const hasHeight = searchParams.has('height')

        const width = Number(hasWidth ? searchParams.get('width') : 600)

        const height = Number(hasHeight ? searchParams.get('height') : 600)

        return new ImageResponse(
            (
                <div
                    style={{
                        display: 'flex',
                        color: 'black',
                        background: '#f0db4f',
                        width: '100%',
                        height: '100%',
                        textAlign: 'center',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                    }}
                >
                    <img
                        src='https://ruvasqm.tech/logo.svg'
                        width={width / 1.5}
                        height={height / 1.5}
                    />
                </div>
            ),
            {
                width: width,
                height: height,
            }
        )
    } catch (e) {
        console.log(`${e.message}`)
        return new Response(`Failed to generate the image`, {
            status: 500,
        })
    }
}
