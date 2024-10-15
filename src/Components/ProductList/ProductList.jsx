function ProductList(props){
return(
    <div>
    <h1>Product List</h1>
    <p> 
        <ul>
            {props.products.map((product, index) => (
                <li key={index}>{product.name + " -"} {"Price: $" + product.price} </li>
            ))}
        </ul>
    </p>
    </div>
        )
    
}

export default ProductList;