import React from 'react'

const AnimeCard = (props) => {
    return (
        <div className='gallery-items bg-black pt-3 pl-3 pr-3 rounded'>
            <a href={props.url} target='_blank'>
                <img src={props.img} alt={props.title} className='anime-img rounded' />
                <p className='text-white font-bold font-sans'>{props.title}</p>
            </a>
        </div>
    )
}

export default AnimeCard