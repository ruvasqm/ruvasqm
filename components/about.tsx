import { SectionTitle } from '@components'

const About = () => (
    <section
        id='about'
        className='flex flex-col items-start justify-start lg:justify-center bg-secondary text-white w-full h-full p-10 unselectable font-bold'
    >
        <SectionTitle title={'About me'} />
        <div className='h-5' />
        <p className='lg:max-w-lg text-xl lg:text-3xl'>
            I&apos;m a full stack developer with a passion for creating
            beautiful and functional websites. I have a strong background in web
            development and I&apos;m always looking to learn new technologies
            and improve my skills.
        </p>
        {/* TODO: add pictures with parallax */}
    </section>
)
export default About
