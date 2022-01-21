import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Product from '../components/Product'

import { API_URL } from '../constant/ApiUrl'

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios(`${API_URL}/products`)
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="ProductList">
      <div className="ProductList-Filter" style={{ width: '450px' }}>
        Filter
      </div>
      <div className="ProductList-products">
        <Product products={products} />
      </div>
    </div>
  )
}

export default ProductList
