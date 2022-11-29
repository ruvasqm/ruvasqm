import { SectionTitle } from '@components'

const Hero = () => (
    <section
        id='hero'
        className='flex items-end justify-end max-w-9xl mx-auto bg-primary text-secondary w-full h-full p-10 snap-start'
    >
        <SectionTitle
            title={
                <>
                    I&apos;m Ruben,
                    <br /> a JS developer
                </>
            }
        />
    </section>
)

export default Hero
