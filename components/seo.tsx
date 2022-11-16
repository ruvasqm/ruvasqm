import Head from 'next/head'
import resume from '@resume.json'

const SEO = ({ title = resume.basics.name }: { title?: string }) => (
    <Head>
        {/*<!-- Favicons -->*/}
        <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
        />
        <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
        />
        <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='msapplication-TileColor' content='#ffc40d' />
        <meta name='theme-color' content='#ffffff' />

        {/*<!-- HTML Meta Tags -->*/}
        <title>{title}</title>
        <meta name='description' content={resume.basics.summary} />
        <meta httpEquiv='content-language' content='en-us' />
        {/*<!-- Facebook Meta Tags -->*/}
        <meta property='og:url' content={resume.basics.url} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={resume.basics.summary} />
        <meta
            property='og:image'
            content={`${resume.basics.url}/api/og?height=630&width=1200`}
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta
            property='og:image:url'
            content={`${resume.basics.url}/api/og?height=630&width=1200`}
        />

        {/*<!-- Twitter Meta Tags -->*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
            property='twitter:domain'
            content={resume.basics.url.replace('https://', '')}
        />
        <meta property='twitter:url' content={resume.basics.url} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={resume.basics.summary} />
        <meta
            name='twitter:image'
            content={`${resume.basics.url}/api/og?height=630&width=1200`}
        />

        {/*<!-- Meta Tags Generated via https://www.opengraph.xyz -->*/}
        {/*<!-- Favicons Generated via https://realfavicongenerator.net/svg-favicon/ -->*/}
    </Head>
)

export default SEO
