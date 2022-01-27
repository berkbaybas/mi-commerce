import React from 'react'
import { Link } from 'react-router-dom'

function Product({ products }) {
  return (
    <>
      {!products.lenght
        ? products.map((product) => (
            <div className="Product" key={product.id}>
              <Link className="Product-link" to={`product/${product.id}`} />
              <img
                src={product.colors[0].image}
                className="Product-image"
                alt={product.name}
              />
              <p className="Product-name">{product.name}</p>
              <p className="Product-price">{product.price}</p>
            </div>
          ))
        : ''}
    </>
  )
}

export default Product
