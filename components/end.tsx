import resume from '@resume.json'
import React from 'react'
import { generateRandomColor, shuffle } from '@utils'

const highlights = resume.work.flatMap((work) => work.highlights)
const keywords = resume.skills.flatMap((skill) => skill.keywords)
const pKeywords = resume.projects.flatMap((project) => project.keywords)
const vHighlights = resume.volunteer.flatMap(
    (volunteer) => volunteer.highlights
)
const _terms = new Set([
    ...highlights,
    ...keywords,
    ...pKeywords,
    ...vHighlights,
])
const shuffled: string[] = shuffle(Array.from(_terms))

const generateTransform = (orbitCoords: string) => {
    return `from { opacity:1; transform: rotate(0deg) translate3d(${orbitCoords}) rotate(0deg); }
         to   { opacity:1; transform: rotate(360deg) translate3d(${orbitCoords}) rotate(-360deg); }`
}
const orbittingTerms = (() => {
    const term_color = shuffled.map((term) => generateRandomColor())
    const phi = (1 + Math.sqrt(5)) / 2
    const xCoord = (theta: number) =>
        10 + Math.floor(15 * phi * theta * Math.cos(theta))
    const yCoord = (theta: number) =>
        Math.floor(15 * phi * theta * Math.sin(theta))
    const orbits = (() => {
        const orbitCoords: string[] = []
        const theta_i = shuffled.map(
            (term, i) => (i * Math.PI * 2) / shuffled.length
        )
        const z_0 = (() => {
            let phi_sum = 0
            for (let i = 0; i < shuffled.length; i++) {
                phi_sum += Math.pow(phi, i)
            }
            return 30 / phi_sum
        })()
        const z_i = shuffled.map((term, i) =>
            Math.floor(z_0 * Math.pow(phi, i))
        )
        for (let i = 0; i < shuffled.length; i++) {
            orbitCoords.push(
                `${xCoord(theta_i[i])}px, ${yCoord(theta_i[i])}px, ${z_i[i]}px`
            )
        }
        return orbitCoords
    })()

    return shuffled.map((term, i) => (
        // TODO: figure out a way to avoid this suppressHydrationWarning hack for dev
        <span
            suppressHydrationWarning={true}
            id={'w' + term.replace(/\s|\./, '_')}
            key={'w' + term.replace(/\s|\./, '_')}
            className='text-2xl lg:text-4xl scaler'
        >
            {term}
            <style jsx>
                {`
                    #${'w' + term.replace(/\s|\./, '_')} {
                        animation: ${'o' + term.replace(/\s|\./, '_')} 4s linear
                            infinite;
                        animation-delay: ${1 + i * 0.1 * phi}s;
                        color: ${term_color[i]} !important;
                        opacity: 0;
                        position: absolute;
                    }
                    @keyframes ${'o' + term.replace(/\s|\./, '_')} {
                        ${generateTransform(orbits[i])}
                    }
                `}
            </style>
        </span>
    ))
})()

const End: React.FunctionComponent = () => {
    return (
        <section
            id='end'
            className='relative flex flex-col lg:flex-row items-center justify-end bg-secondary text-white w-full h-[110vh] sm:h-full lg:h-3/4 p-10 unselectable font-medium snap-center snap-normal'
        >
            <div className='absolute flex items-center justify-center w-full h-full lg:left-0 lg:w-1/2 overflow-hidden sm:overflow-visible'>
                {orbittingTerms}
            </div>
            <div className='flex items-center justify-center lg:p-10'>
                <p className='text-lg sm:text-2xl lg:text-3xl text-center font-bold'>
                    And, we always keep moving <br />
                    <span className='text-primary font-black'>forward</span>
                </p>
            </div>
        </section>
    )
}
export default End
