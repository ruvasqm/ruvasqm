import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

import resume from '@resume.json'
import { SEO, Hero, About, Footer, Layout, Idea } from '@components'

const Page: NextPageWithLayout = () => {
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
