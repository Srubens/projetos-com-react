import React, { useState } from 'react'

const Tours = ({id, image, price, title, paragrafo, removerItem}) =>{
    
    const [readMore, setReadMore] = useState(false)

    return(
        <article className='tour_sigle' >
            <div className="d-flex flex-column align-items-center col">
                <img src={image} alt="image" />
                <div className="tour-info">
                    <h4>{title}</h4>
                    <span>{price}</span>
                    <p>
                    { readMore ? paragrafo : `${paragrafo.substring(0,140)}...` }
                        <span className='d-flex justify-content-md-center flex-column align-items-center mt-2' >
                            <span className="btn btn-primary col col-md-8" onClick={() => setReadMore(!readMore)} >
                                { readMore ? 'Mostrar menos' : 'Leia mais' }
                            </span>
                        </span>
                    </p>
                    <div className="d-flex justify-content-md-center flex-column align-items-center">
                        <div className="btn btn-outline-danger col col-md-8" onClick={() => removerItem(id)} >Remover item</div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Tours