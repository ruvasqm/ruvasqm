import '@styles/globals.css'
import { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page)
    return getLayout(<Component {...pageProps} />)
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
    if (metric.label === 'web-vital') {
        console.log(metric)
        // The metric object ({ id, name, startTime, value, label }) is logged to the console
    }
}
