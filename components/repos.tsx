import { SectionTitle, Readme } from '@components'
import { useEffect } from 'react'
import type { Repo } from '@utils'

const Repos = ({ repos }: { repos: Repo[] }) => {
    return (
        <section
            id='repos'
            className='flex flex-col items-start justify-start lg:justify-center bg-secondary text-white w-full h-full p-10 unselectable font-bold snap-center snap-normal'
        >
            <SectionTitle title={'Repos'} />
            <div className='h-5' />
            <Readme link={'/api/readme'} />
            {/* TODO: add pictures with parallax */}
        </section>
    )
}
export default Repos
