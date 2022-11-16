import type { NextPage } from 'next'
import resume from '@resume.json'
import { extractUniqueKeys, sortSkills } from '@utils'
import Image from 'next/image'
import { SEO } from '@components'
import Link from 'next/link'

const pill = (key: string) => (
    <span
        key={key}
        className='bg-primary print:bg-primary text-secondary rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2'
    >
        {key}
    </span>
)

const Page: NextPage = () => {
    return (
        <>
            <SEO title='Ruben Vasquez' />
            <main className='flex flex-col items-start min-h-auto print:h-auto w-full bg-secondary text-white p-5 lg:p-14 space-y-3 print:block'>
                <div className='flex flex-col lg:flex-row print:flex-row items-center w-full'>
                    <div className='flex flex-row items-center gap-3 '>
                        <div
                            className='relative rounded-full w-[10rem] h-[10rem] print:w-[5rem] print:h-[5rem]'
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
                        <Link href='/' className='no-underline'>
                            <div className='flex flex-col w-fit h-fit items-end border-b-[0.3rem] border-primary p-3'>
                                <h1 className='text-2xl lg:text-3xl font-bold'>
                                    {resume.basics.name}
                                </h1>
                                <h2 className='text-base'>
                                    {resume.basics.label}
                                </h2>
                            </div>
                        </Link>
                    </div>
                    <div className='flex flex-row flex-wrap mt-5 lg:mt-0 lg:ml-auto print:ml-auto'>
                        {resume.basics.profiles.map(
                            (profile: {
                                network: string
                                username: string
                                url: string
                            }) => (
                                <a
                                    key={profile.network}
                                    href={profile.url}
                                    title={`${profile.network} ${profile.username}`}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='flex flex-row items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary text-secondary mr-2 mb-2'
                                >
                                    <Image
                                        src={`/${profile.network.toLowerCase()}.svg`}
                                        width={20}
                                        height={20}
                                        alt={profile.network}
                                    />
                                </a>
                            )
                        )}
                    </div>
                </div>
                <section
                    id='_about'
                    className='flex flex-col items-start justify-start w-full sm:h-auto print:block'
                >
                    <h1 className='text-2xl font-bold border-b-[0.3rem] border-primary p-3'>
                        About me
                    </h1>
                    <p className='text-base mt-2'>{resume.basics.summary}</p>
                </section>
                <section
                    id='_skills'
                    className='flex flex-col items-start justify-start w-full h-fit print:block'
                >
                    <h1 className='text-2xl font-bold border-b-[0.3rem] border-primary p-3'>
                        Skills
                    </h1>
                    <div className='flex flex-row flex-wrap w-full mt-2'>
                        {extractUniqueKeys(resume.skills, 'type').map(
                            (type: string) => (
                                <div
                                    key={type}
                                    className='flex flex-col items-start justify-start grow basis-1/3 lg:p-3'
                                >
                                    <h2 className='text-xl font-bold'>
                                        {type}
                                    </h2>
                                    <ul className='flex flex-col items-start justify-start w-full h-full p-3'>
                                        {resume.skills
                                            .filter(
                                                (skill) => skill.type === type
                                            )
                                            .sort((a, b) =>
                                                sortSkills(a.level, b.level)
                                            )
                                            .map((skill) => (
                                                <li
                                                    key={skill.name}
                                                    className='flex flex-row items-center justify-between w-full'
                                                >
                                                    {' '}
                                                    <span className='text-base'>
                                                        {skill.name}
                                                    </span>
                                                    {pill(skill.level)}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )
                        )}
                    </div>
                </section>
                <section
                    id='_experience'
                    className='flex flex-col items-start justify-start w-full h-fit print:block'
                >
                    <h1 className='text-2xl font-bold border-b-[0.3rem] border-primary p-3'>
                        Experience
                    </h1>
                    <div className='flex flex-col items-start justify-start w-full h-full print:block'>
                        {resume.work.map((job) => (
                            <div
                                key={job.name}
                                className='flex flex-col items-start justify-start w-full h-full p-3  print:break-inside-avoid-page print:block'
                            >
                                <div className='flex flex-row flex-wrap items-center w-full'>
                                    <h2 className='text-xl font-bold'>
                                        {job.name}
                                    </h2>
                                    <h3 className='text-base ml-3'>
                                        {job.position}
                                    </h3>
                                    <h5 className='text-xs font-bold ml-auto'>
                                        {job.startDate} - {job.endDate}
                                    </h5>
                                </div>
                                <a
                                    className='text-xs no-underline font-bold'
                                    href={job.url}
                                >
                                    {job.url}
                                </a>
                                <p className='text-base p-2'>{job.summary}</p>
                                <div className='flex flex-row flex-wrap items-start justify-start w-full h-full'>
                                    {job.highlights.map((highlight) =>
                                        pill(highlight)
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section
                    id='_education'
                    className='flex flex-col items-start justify-start w-full h-fit'
                >
                    <h1 className='text-2xl font-bold border-b-[0.3rem] border-primary p-3'>
                        Education
                    </h1>
                    <div className='flex flex-col items-start justify-start w-full h-full'>
                        {resume.education.map((school) => (
                            <div
                                key={school.institution}
                                className='flex flex-col items-start justify-start w-full h-full p-3 print:break-inside-avoid-page print:block'
                            >
                                <div className='flex flex-row items-center w-full'>
                                    <h2 className='text-xl font-bold'>
                                        {school.institution}
                                    </h2>
                                    <h3 className='text-base ml-3'>
                                        {school.area}
                                    </h3>
                                    <h5 className='text-xs font-bold ml-auto'>
                                        {school.startDate} - {school.endDate}
                                    </h5>
                                </div>
                                <a
                                    className='text-xs no-underline font-bold'
                                    href={school.url}
                                >
                                    {school.url}
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
                <section
                    id='_languages'
                    className='flex flex-col items-start justify-start w-full h-auto print:grow'
                >
                    <h1 className='text-2xl font-bold border-b-[0.3rem] border-primary p-3'>
                        Languages
                    </h1>
                    <div className='flex flex-row flex-wrap items-start justify-start w-full h-full'>
                        {resume.languages.map((language) => (
                            <div
                                key={language.language}
                                className='flex flex-col items-start justify-start p-3 print:break-inside-avoid-page print:block'
                            >
                                <div className='flex flex-row items-center w-full p-2'>
                                    <h2 className='text-xl font-bold'>
                                        {language.language}
                                    </h2>
                                    <h3 className='text-base ml-3'>
                                        {language.fluency}
                                    </h3>
                                </div>
                                <a href={language.certificate}>
                                    {language.certificate
                                        ? pill(language.certificate)
                                        : ''}
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Page
