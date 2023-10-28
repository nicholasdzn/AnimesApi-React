import React from 'react'
import { SiMyanimelist } from "react-icons/si";
import logo from '../static/ane.svg'

const Header = ({onclick}) => {
    return (
        <header className='flex flex-row bg-violet-900 w-full pt-3 pb-3 pl-2 pr-2 items-center justify-between header' >
            <button onClick={onclick} >
            {/* <SiMyanimelist className='fill-white text-5xl' /> */}
            <img src={logo} alt="Logo" width="150" height="150"/>
            </button>
            <h1 className='text-3xl text-white font-mono'>Happy Halloween</h1>
        </header>
    )
}

export default Header