const Menu = ({menu}) => {
    return (
        <div className="d-flex justify-content-md-row flex-md-row flex-column gap-3" >
            {
                menu.map((menuItem) => {
                    const { id, image, title, description, price, category } = menuItem
                    return  <article key={id} className="d-flex" >
                                <img src={image} alt="imagem da comida" />
                                <div className="p-2" >
                                <header className="d-flex justify-content-md-between">
                                    <h4>
                                        {title}
                                    </h4>
                                    <h4>{price}</h4>
                                </header>
                                    {description}
                                    
                                </div>
                            </article>
                })
            }
        </div>
    );
}

export default Menu;