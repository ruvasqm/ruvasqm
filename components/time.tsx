import { secondsToHHMMSS } from '@utils'
import { Chart } from '@components'
import Image from 'next/image'
import SectionTitle from './sectionTitle'

export type language = {
    name: string
    color: string
    percent: number
}

export type wakaTimeStats = {
    languages: language[]
    activity: {
        grand_total: {
            decimal: number
            digital: string
            hours: number
            minutes: number
            text: string
            total_seconds: number
        }
        range: {
            date: string
            end: string
            start: string
            text: string
            timezone: string
        }
    }[]
}

const Time = ({ languages, activity }: wakaTimeStats) => {
    return (
        <section
            id='time'
            className='flex flex-col-reverse lg:flex-row items-start justify-start lg:justify-center bg-secondary text-white w-full lg:h-3/4 p-10 unselectable font-bold'
        >
            <div className='flex flex-col w-full lg:p-5 h-[30vh] lg:w-1/2 items-center justify-center lg:h-full'>
                <p className='text-lg sm:text-2xl lg:text-3xl unselectable'>
                    We dedicate ourselves to them,
                    <br />
                    give them <span className='text-primary'>our time</span> and
                    energy,
                    <br />
                    and hope that they will be worth it.
                </p>
            </div>
            <div className='flex flex-col lg:w-1/2 items-start lg:items-end sm:h-full lg:p-5'>
                <SectionTitle
                    title={
                        <a
                            className='flex flex-row items-center gap-3 p-3 w-fit no-underline'
                            href='https://wakatime.com/'
                        >
                            <Image
                                className='text-white'
                                src='/wakatime.svg'
                                height={40}
                                width={40}
                                alt='wakatime logo'
                            />
                            <span>WakaTime</span>
                        </a>
                    }
                />

                <h3 className='text-4xl sm:text-7xl text-primary font-neutraface font-black'>
                    {secondsToHHMMSS(
                        activity.reduceRight(
                            (total, day) =>
                                day.grand_total.total_seconds + total,
                            0
                        )
                    )}
                </h3>
                <h4 className='text-xl sm:text-3xl text-primary font-neutraface font-black'>
                    This week&apos;s coding time
                </h4>
                <Chart
                    className='my-5 w-full min-h-[2.5rem] flex flex-row'
                    items={languages}
                />
                <div className='flex flex-row flex-wrap gap-3 sm:gap-2 lg:gap-5 items-center lg:justify-end'>
                    {languages.map((language) => (
                        <div
                            key={'li' + language.name}
                            className='text-medium lg:text-2xl'
                            style={{ color: language.color }}
                        >
                            {language.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Time
