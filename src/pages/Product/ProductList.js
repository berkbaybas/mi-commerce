import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../store/actions/productActions'

import Product from '../../components/Product'

function ProductList() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.items)

  useEffect(() => {
    // axios(`${API_URL}/products`)
    //   .then((res) => {
    //     setProducts(res.data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    dispatch(fetchProducts())
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
