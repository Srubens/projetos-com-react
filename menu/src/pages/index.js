import React from 'react'
import {Categories, Menu} from './Components'

const Index = () =>{
    return(
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Nosso Menu</h2>
                    <Categories/>
                    <Menu/>
                </div>
            </section>
        </main>
    )
}

export default Index