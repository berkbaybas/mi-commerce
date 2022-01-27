import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import CartItem from '../components/Cart/CartItem'

function Cart() {
  const cart = useSelector((state) => state.cart)
  console.log(cart.items === [] && true)
  return (
    <div className="Cart">
      <div className="container">
        {cart.items.length !== 0 && (
          <div className="Cart-header">
            <div className="Cart-header-image">
              <p>Ürün resim</p>
            </div>
            <div className="Cart-header-name">
              <p>Ürün adı</p>
            </div>
            <div className="Cart-header-price">
              <p>Fiyat</p>
            </div>
            <div className="Cart-header-quantity">
              <p>Adet</p>
            </div>
            <div className="Cart-header-total">
              <p>Toplam</p>
            </div>
          </div>
        )}
        {cart.items.length !== 0 ? (
          cart.items.map((item, index) => <CartItem key={index} item={item} />)
        ) : (
          <div>
            <p>
              Sepetinizde hiç ürün yok şimdi
              <Link to="/"> alışverişe başla</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
