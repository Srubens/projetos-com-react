const Menu = ({items}) => {
    return (
        <div className="d-grid">
        <div className="row">
            {
                items.map((menuItem) => {
                    const { id, image, title, description, price, category } = menuItem
                    return (
                            <div key={id} className="col-12 col-md-6 gap-3 mb-4">
                                <article className="d-flex" >
                                    <div className="main_img" >
                                        <img src={image} alt="imagem da refeição" />
                                    </div>
                                    <div className="p-2 " >
                                        <header className="d-flex justify-content-between" >
                                            <h4>Title</h4>
                                            <h4>price</h4>
                                        </header>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla debitis quos modi facere nisi iure libero ex neque assumenda cumque odio ab, amet quas veniam tempora nesciunt ea vel ut.</p>
                                    </div>
                                </article>
                            </div>
                    )
                })
            }
            </div>
        </div>
    );
}

export default Menu;