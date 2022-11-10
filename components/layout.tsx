import { ReactElement, useState } from 'react'
import { Navbar, Icon } from '@components'

export default function Layout({ children }: { children: ReactElement }) {
    const [showNav, setShowNav] = useState(false)
    return (
        <>
            <Navbar className={`${showNav ? '' : 'hidden'}`} />
            <main className='h-full'>{children}</main>
            <div className='z-10 flex flex-row items-center justify-center w-full bg-transparent text-current'>
                <button className='text-center  bg-transparent animate-bounce'>
                    <Icon name="Let's go" icon='/arrow.svg' />
                </button>
            </div>
        </>
    )
}
