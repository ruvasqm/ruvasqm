import { ReactElement, useState } from 'react'
import { Navbar, Icon } from '@components'

const Layout = ({ children }: { children: ReactElement }) => {
    const [showNav, setShowNav] = useState(false)
    return (
        <>
            <Navbar className={`${showNav ? '' : 'hidden'}`} />
            <main className='h-screen w-screen overflow-scroll snap-y scroll-smooth snap-mandatory'>
                {children}
            </main>
            {/* <div className='z-10 flex flex-row items-center justify-center w-full bg-transparent text-current'>
                <button className='text-center  bg-transparent animate-bounce'>
                    <Icon name="Let's go" icon='/arrow.svg' href='/#about' />
                </button>
            </div> */}
            {/* TODO: Add arrow button */}
        </>
    )
}

export default Layout
