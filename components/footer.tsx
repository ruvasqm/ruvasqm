import { Icon, SectionTitle } from '@components'
import Image from 'next/image'
import resume from '@resume.json'

const Footer = () => (
    <footer className='flex flex-col items-center justify-center md:justify-between space-y-5 md:space-y-20 h-full md:h-auto w-full p-5 md:pt-16 bg-secondary text-white font-bold unselectable'>
        <div className='flex flex-col-reverse md:flex-row justify-center md:justify-around items-center w-full basis-11/12 space-y-12 md:space-y-0'>
            <div className='flex flex-col items-center md:items-start max-w-md mt-5 md:mt-0'>
                <SectionTitle title='Contact me!' />
                <div className='h-5' />
                <p className='text-lg '>
                    I&apos;d be more than happy to learn about your project and
                    help you get the best results possible.
                </p>
            </div>
            <div
                className='relative rounded-full w-[20rem] h-[20rem]'
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
        <div className='flex flex-row items-center justify-center gap-6'>
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
                        icon={`/${profile.network.toLowerCase()}.svg`}
                    />
                )
            )}
        </div>
    </footer>
)

export default Footer
