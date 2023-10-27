import React from 'react'
import { AiFillStar } from "react-icons/ai";


const AnimeCard = (props) => {
    return (
        <div className='gallery-items bg-violet-700 pt-3 pl-3 pr-3 rounded'>
            <a href={props.url} target='_blank'>
                <img src={props.img} alt={props.title} className='anime-img rounded' />
                <p className='text-white font-bold font-sans'>{props.title}</p>
            </a>
        </div>
    )
}

export default AnimeCard