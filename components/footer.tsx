import { Icon, SectionTitle } from '@components'
import Image from 'next/image'
import resume from '@resume.json'

const Footer = () => (
    <footer className='flex flex-col items-center justify-center lg:justify-around space-y-5 lg:space-y-20 min-h-full lg:h-auto w-full p-5 lg:pt-16 bg-secondary text-white font-bold unselectable'>
        <div className='flex flex-col-reverse lg:flex-row justify-center lg:justify-around items-center w-full basis-11/12 space-y-10 lg:space-y-0'>
            <div className='flex flex-col items-center lg:items-start mt-5 lg:mt-0'>
                <SectionTitle
                    title={
                        <>
                            What&apos;s your{' '}
                            <span className='text-primary font-black'>
                                idea
                            </span>
                            ?
                        </>
                    }
                />
                <div className='h-5' />
                <p className='text-lg lg:text-3xl max-w-lg'>
                    I&apos;d be more than happy to learn about your project and
                    help you get the best results possible.
                </p>
            </div>
            <div
                className='relative rounded-full w-[15rem] h-[15rem] lg:w-[20rem] lg:h-[20rem]'
                title='me'
            >
                <Image
                    className='rounded-full'
                    src='/me.jpg'
                    layout='fill'
                    objectFit='contain'
                    alt='me'
                />
            </div>
        </div>
        <div className='flex flex-row items-center justify-center gap-3'>
            {resume.basics.profiles.map(
                (profile: {
                    network: string
                    username: string
                    url: string
                }) => (
                    <Icon
                        key={profile.network}
                        name={profile.network}
                        handle={profile.username}
                        href={profile.url}
                        size={35}
                        icon={`/${profile.network.toLowerCase()}.svg`}
                    />
                )
            )}
        </div>
    </footer>
)

export default Footer
