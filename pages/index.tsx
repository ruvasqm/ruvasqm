import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import type { wakaTimeStats } from '@components/time'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import resume from '@resume.json'
import { SEO, Hero, About, Footer, Layout, Idea, Time } from '@components'

const Page: NextPageWithLayout<
    InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ languages, activity }) => {
    return (
        <>
            <SEO title={resume.basics.name} />
            <Hero />
            <About />
            <Idea />
            <Time languages={languages} activity={activity} />
            <Footer />
        </>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default Page

export const getServerSideProps: GetServerSideProps<{
    languages: wakaTimeStats['languages']
    activity: wakaTimeStats['activity']
}> = async () => {
    // Fetch data from external API
    const resActivity = await fetch(
        `https://wakatime.com/share/@d89483f8-cca1-4552-959c-d08ef54a185b/b75903af-3dbd-4bda-8037-5851aaf2b1fd.json`
    )
    const activity: wakaTimeStats['activity'] = await resActivity
        .json()
        .then((data) => data.data)
    const resLanguages = await fetch(
        `https://wakatime.com/share/@d89483f8-cca1-4552-959c-d08ef54a185b/beabaafa-b076-40ff-8e26-23eb8c379081.json`
    )
    const languages: wakaTimeStats['languages'] = await resLanguages
        .json()
        .then((data) => data.data)
    // Pass data to the page via props
    return { props: { languages, activity } }
}
