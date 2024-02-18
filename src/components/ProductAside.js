const ProductAside = ({name, title, details, price, discount}) => {
    return (
        <aside className="max-w-96">
            <h3 className="uppercase text-orange-500">{name}</h3>
            <h2 className="font-bold capitalize text-2xl">{title}</h2>
            <p>{details}</p>
            <h4>{price}</h4>
            <h5>{discount}</h5>
        </aside>
    )
}

export default ProductAside;