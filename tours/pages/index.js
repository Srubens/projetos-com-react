import React, { useState } from 'react'
import {data} from './data'
import Tours from './Tours'

const Index = () =>{

    const [tours, setTours] = useState(data)

    const removerItem = (id) =>{
        let newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours)
    }

    return(
        <>
            <main>
                <div>
                    <div className="d-flex">
                        <h1>Locais turisticos para viagens pelo brasil</h1>
                    </div>
                    <div className="container">

                        <div className="row d-flex flex-column flex-md-row col gap-3 ">
                            {
                                tours.map((tour, index) =>{
                                    const { id, image, price, title, paragrafo } = tour
                                    return(
                                        <div className='tours col d-flex flex-column align-items-center' key={index} >
                                                <Tours 
                                                 image={tour.image}
                                                 price={tour.price}
                                                 title={tour.title}
                                                 paragrafo={tour.paragrafo}
                                                 key={index} />
                                                <div className="btn btn-primary col-8 " >Ler mais</div>
                                                <br/>
                                                <div className="btn btn-outline-danger col-8" onClick={() => removerItem(id)} >remover item</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                </div>
            </main>
        </>
    )
}

export default Index