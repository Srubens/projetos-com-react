import React, {useState} from 'react'
import {Categories, Menu} from './Components'
import items from './menu'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]
// console.log(allCategories)

const Index = () =>{

    const [menuItems, setMenuItems] = useState(items)
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) =>{
        if( category === 'all' ){
            setMenuItems(items)
            return
        }
        const newMenu = items.filter((item) => item.category === category)
        setMenuItems(newMenu)
    }

    return(
        <main>
            <section className="menu section">
                <div className="title">
                <div className="container">
                    <header className="text-center m-4">
                        <h2>Nosso Menu</h2>
                    </header>
                    <Categories categories={categories} filterItems={filterItems} />
                    <Menu items={menuItems} />
                </div>
                </div>
            </section>
        </main>
    )
}

export default Index