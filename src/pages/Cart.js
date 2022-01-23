import React from 'react'
import { useSelector } from 'react-redux'

import CartItem from '../components/Cart/CartItem'

function Cart() {
  const cart = useSelector((state) => state.cart)
  console.log(cart.items)
  return (
    <div className="Cart">
      <div className="container">
        {cart.items ? cart.items.map((item) => <CartItem item={item} />) : ''}
      </div>
    </div>
  )
}

export default Cart
