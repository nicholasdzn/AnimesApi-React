import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
    return (
        <div className='mt-2 text-[40px] animate-spin flex flex-row justify-center'><AiOutlineLoading3Quarters /></div>
    )
}

export default Loading