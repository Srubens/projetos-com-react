import React, { useState } from 'react'
import {data} from './data'
import Tours from './Tours'

const Index = () =>{

    const [tours, setTours] = useState(data)
    
    const removerItem = (id) =>{
        let newTours = tours.filter((tour) => tour.id !== id)
        return setTours(newTours)
    }

    if( tours.length === 0 ){
        return(
            <>
                <div className="d-flex text-center justify-content-md-center mt-2">
                            <h1>Todos os locais foram retirados</h1>
                        </div>
                <div className="d-flex  justify-content-md-center">
                    <div className='btn btn-primary' onClick={() => setTours(data)} >Recarregar</div>
                </div>
            </>
        )
    }

    return(
        <>
            <main>
                <div>
                    <div className="d-flex text-center justify-content-md-center mt-2">
                        <h1>Locais turisticos para viagens pelo Brasil</h1>
                    </div>
                    <div className="container">

                        <div className="row d-flex flex-column flex-md-row col gap-3 ">
                            {
                                tours.map((tour, index) =>{
                                    return(
                                        <div className='tours col d-flex flex-column align-items-center' key={index} >
                                                <Tours 
                                                    {...tour}
                                                    removerItem={removerItem}
                                                 />
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