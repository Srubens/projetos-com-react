import React, {useState} from 'react'
import {Categories, Menu} from './Components'
import menu from './menu'

const Index = () =>{

    const [menuItems, setMenuItems] = useState(menu)
    const [categories, setCategories] = useState([])

    return(
        <main>
            <section className="menu section">
                <div className="title">
                <div className="container">
                    <h2>Nosso Menu</h2>
                    <Categories/>
                    <Menu menu={menuItems} />
                </div>
                </div>
            </section>
        </main>
    )
}

export default Index