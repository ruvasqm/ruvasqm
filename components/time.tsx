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
            className='flex flex-col-reverse md:flex-row items-start justify-start md:justify-center bg-secondary text-white w-full md:h-3/4 p-10 unselectable font-bold'
        >
            <div className='flex flex-col w-full md:p-5 h-[30vh] md:w-1/2 items-center justify-center md:h-full'>
                <p className='text-xl md:text-3xl unselectable'>
                    We dedicate ourselves to them,
                    <br />
                    give them our time and energy,
                    <br />
                    and hope that they will be worth it.
                </p>
            </div>
            <div className='flex flex-col md:w-1/2 items-start md:items-end md:h-full md:p-5'>
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

                <h3 className='text-5xl md:text-7xl text-primary font-neutraface font-black'>
                    {secondsToHHMMSS(
                        activity.reduceRight(
                            (total, day) =>
                                day.grand_total.total_seconds + total,
                            0
                        )
                    )}
                </h3>
                <h4 className='text-2xl md:text-3xl text-primary font-neutraface font-black'>
                    This week&apos;s coding time
                </h4>
                <Chart
                    className='my-5 w-full h-10 flex flex-row'
                    items={languages}
                />
                <div className='flex flex-row flex-wrap gap-3 md:gap-5 items-center md:justify-end'>
                    {languages.map((language) => (
                        <div
                            key={'li' + language.name}
                            className='text-medium md:text-2xl'
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
