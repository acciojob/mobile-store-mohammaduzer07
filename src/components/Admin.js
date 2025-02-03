import React, { useState } from 'react'
import { ProductData } from './Data'
import { Link, useParams } from 'react-router-dom'

const Admin = ()=>{
    const [products, setProducts] = useState(ProductData)

    const addProduct = ()=>{
        const newProduct = {id: `${products.length + 1}`, name : "New Product", price : "999", description : "New Product Description"}
        setProducts([...products, newProduct]);
    }

    const handleDelete = (task)=> {
        const updateTask = products.filter((item) => item !== task)
        setProducts(updateTask)
    }

    return <div>
        <h1>Admin Panel</h1>
        <button onClick={addProduct}>Add Product</button>
        <ul>
            {products.map((item) =>{
                return <li key={item.id}>{item.name}</li>
            })}
        </ul>
        <ul>
            {products.map((task, index) =>{
                return <li key={task.id}>
                    <button onClick={() => handleDelete(task)}>Delete</button>
                </li>
            })}
        </ul>
        <Link to="/">Back to Home</Link>
    </div>
}

export default Admin