import React from 'react'

const People = ({image, name, age}) => {
    return(
        <article className='person'>
            <img src={image} alt="image" />
            <div>
                <h1>{name}</h1>
                <p>{age}</p>
            </div>
        </article>
    )
}

export default People