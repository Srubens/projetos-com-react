import React from 'react'

const Tours = ({image, price, title, paragrafo}) =>{
    return(
        <article className='tour_sigle d-flex flex-column align-items-center col' >
            <img src={image} alt="image" />
            <div className="tour-info">
                <h4>{title}</h4>
                <span>{price}</span>
                <p>{paragrafo}</p>
            </div>
        </article>
    )
}

export default Tours