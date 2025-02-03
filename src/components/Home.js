import React from 'react'
import { ProductData } from './Data'
import { Link } from 'react-router-dom'

const Home = () =>{

    return <div>
        <h1>Product List</h1>
        <ul>
            {ProductData.map((product) =>{
                return <li>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                </li>
            })}
        </ul>
        <Link to="/admin">Admin Panel</Link>
    </div>
}

export default Home