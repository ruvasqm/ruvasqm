import '@styles/globals.css'
import { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
// Preparing for nextjs 13 swap
//import localFont from '@next/font/local'
//
// const neutraface = localFont({
//     src: [
//         {
//             path: '../public/Neutraface Text Light.otf',
//             weight: '400',
//             style: 'normal'
//         },
//         {
//             path: '../public/Neutraface Text Light Italic.otf',
//             weight: '100',
//             style: 'italic'
//         },
//         {
//             path: '../public/Neutraface Text Book.otf',
//             weight: '300',
//             style: 'normal'
//         },
//         {
//             path: '../public/Neutraface Text Book Italic.otf',
//             weight: '300',
//             style: 'italic'
//         },
//         {
//             path: '../public/Neutraface Text Demi.otf',
//             weight: '600',
//             style: 'normal'
//         },
//         {
//             path: '../public/Neutraface Text Demi Italic.otf',
//             weight: '600',
//             style: 'italic'
//         },
//         {
//             path: '../public/Neutraface Text Bold.otf',
//             weight: '900',
//             style: 'normal'
//         },
//         {
//             path: '../public/Neutraface Text Bold Italic.otf',
//             weight: '900',
//             style: 'italic'
//         },
//     ],
//     adjustFontFallback: "Arial",
//     display: "swap",
//     variable: '--font-neutraface'
// })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page)
    return getLayout(
        <>
            <Component {...pageProps} />
        </>
    )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
    if (metric.label === 'web-vital') {
        console.log(metric)
        // The metric object ({ id, name, startTime, value, label }) is logged to the console
    }
}
