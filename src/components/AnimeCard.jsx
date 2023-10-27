import React from 'react'
import { AiFillStar } from "react-icons/ai";


const AnimeCard = (props) => {
    return (
        <div className='flex border-white border'>
            <div><img src={props.img} alt={props.title} width={70} height={80} /></div>
            <div className='flex flex-col pl-3 pt-3 gap-3'>
                <a href={props.url} target='_blank'><h2 className='text-xs font-bold text-sky-700	'>{props.title}</h2></a>
                <div className='text-xs pt-1'>
                    <p>{props.genre + ` (Episodes ${props.eps})`}</p>
                    <p className='flex items-center'>{`Score: ${props.score}`} <AiFillStar className='ml-1' /></p>
                </div>
            </div>
        </div>
    )
}

export default AnimeCard