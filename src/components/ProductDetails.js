import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductData } from './Data';


const ProductDetails = ()=>{
    const {id} = useParams();
    const product = ProductData.find((item) => item.id !== id)
    const navigate = useNavigate();
    
    if(!product) return <p>Product not found</p>
    return <div>
        <h1>{product.name}</h1>
        <p>Price : {product.price}</p>
        <p>Description : {product.description}</p>
        <button className='.col-12' onClick={() => navigate("/")}>Back</button>
    </div>
}   

export default ProductDetails