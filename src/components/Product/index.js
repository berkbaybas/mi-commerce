import React from 'react'

function Product({ products }) {
  return (
    <>
      {products.map((product) => {
        return (
          <div className="Product" key={product.id}>
            <img
              src={product.colors[0].image}
              className="Product-image"
              alt={product.name}
            />
            <p className="Product-name">{product.name}</p>
            <p className="Product-price">{product.price}</p>
          </div>
        )
      })}
    </>
  )
}

export default Product
