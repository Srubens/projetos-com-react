import React from 'react'
import {data} from './data'

const Index = () =>{
    return(
        <>
            <main>
                <div>
                    <div className="d-flex">
                        <h1>Locais turisticos para viagens pelo brasil</h1>
                    </div>
                    <div className="tours">
                        {console.log(data)}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Index