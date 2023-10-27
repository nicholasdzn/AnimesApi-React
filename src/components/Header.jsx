import React from 'react'
import { SiMyanimelist } from "react-icons/si";

const Header = () => {
    return (
        <header className='flex flex-row bg-violet-900 w-full pt-3 pb-3 pl-2 pr-2 items-center justify-between' >
            <SiMyanimelist className='fill-white text-5xl' />
            <h1 className='text-3xl text-white font-mono'>Happy Halloween</h1>
        </header>
    )
}

export default Header