import React, { useState } from 'react'
import { Icon } from '@components'
import Link from 'next/link'

function Navbar({ className }: { className?: string }) {
    const [openCV, setOpenCV] = useState(false)
    return (
        <nav
            className={`flex flex-row items-center bg-transparent text-white bg-opacity-60 justify-end fixed t-0 w-full p-5 ${className}`}
        >
            <div
                className={`flex flex-col items-center gap-3 p-3 rounded-full ease-linear duration-300 ${
                    openCV ? 'bg-secondary bg-opacity-60' : ''
                }`}
            >
                <button
                    className={`rounded-full bg-white text-2xl text-secondary font-extrabold p-2 border-4 unselectable border-secondary ${
                        openCV ? '' : 'hover:animate-none animate-pulse'
                    }`}
                    onClick={() => setOpenCV(!openCV)}
                    onBlur={() => setOpenCV(false)}
                >
                    CV
                </button>
                <Link href='/resume' passHref legacyBehavior>
                    <Icon
                        className={`${openCV ? '' : 'hidden'}`}
                        name='HTML'
                        handle=''
                        icon='/html.svg'
                        size={30}
                    />
                </Link>
                <Icon
                    className={`${openCV ? '' : 'hidden'}`}
                    name='PDF'
                    handle=''
                    icon='/pdf.svg'
                    size={30}
                    link='/api/resume?format=pdf'
                />
                <Icon
                    className={`${openCV ? '' : 'hidden'}`}
                    name='JSON'
                    handle=''
                    icon='/json.svg'
                    size={35}
                    link='/api/resume?format=json'
                />
            </div>
        </nav>
    )
}

export default Navbar
