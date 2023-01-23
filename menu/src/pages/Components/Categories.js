function Categories({categories, filterItems}) {
    return (
        <div className="d-flex justify-content-center m-4">
            {
                categories.map((category, index) => {
                    return (
                        <div key={index} className="btn btn-outline-primary ms-2" onClick={() => filterItems(category)} >{category}</div>
                    )
                })
            }
        </div>
    );
}

export default Categories;