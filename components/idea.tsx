import { Blob } from '@components'

const Idea = () => (
    <section
        id='idea'
        className='flex flex-col items-center justify-center lg:justify-center bg-secondary text-white w-full h-1/2 lg:h-3/4 p-10 unselectable font-medium'
    >
        <Blob>
            <h3 className='text-secondary text-3xl'>
                Every <span className='font-black text-inherit'>idea</span>{' '}
                <br />
                is born <br />
                <span className='font-black text-inherit'>Shapeless</span>
            </h3>
        </Blob>
    </section>
)
export default Idea
