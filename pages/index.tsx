import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { useEffect, useCallback, useState } from 'react'
import resume from '@resume.json'
import { SEO, Hero, About, Footer, Layout, Idea } from '@components'
import { useScroll } from '@utils/hooks'
import { debounce } from '@utils'

const Page: NextPageWithLayout = () => {
    const { scrolledPercent, scrollTo } = useScroll(20)
    const [percent, setPercent] = useState(0)
    const scrolledPercentCB = useCallback(
        () => setPercent(scrolledPercent('hero')),
        [scrolledPercent]
    )
    const memoScrollTo = useCallback((to: string) => scrollTo(to), [scrollTo])

    useEffect(() => {
        if (percent > 0.3) memoScrollTo('about')
    }, [percent, memoScrollTo])

    useEffect(() => {
        window.addEventListener('scroll', debounce(scrolledPercentCB, 50))
    })

    return (
        <>
            <SEO title={resume.basics.name} />
            <Hero />
            <About />
            <Idea />
            <Footer />
        </>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default Page
