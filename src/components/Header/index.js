import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

import Logo from '../icons/Logo'
import { useEffect, useState } from 'react'

function Header() {
  const location = useLocation()
  const itemsInCart = useSelector((state) => state.cart.items)
  const choosenProduct = useSelector((state) => state.product.choosenProduct)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    setTotalCount(itemsInCart.reduce((acc, cur) => acc + cur.qty, 0))
  }, [itemsInCart])

  //TODO DELETE LOG
  useEffect(() => {
    console.log(choosenProduct)
  }, [choosenProduct])

  return (
    <header className="Header">
      <div className="container">
        <div className="Header-logo">
          <Link to="/">
            <Logo className="Header-logo-icon" />
          </Link>
        </div>
        <div className="Header-learnMore">
          {location.pathname.includes('product') && (
            <span>{choosenProduct.name} hakkinda daha fazla bilgi edinin</span>
          )}

          <Link to="/cart" className="cart">
            <FaShoppingCart />
            <div className="cart-badge">
              <span>{totalCount}</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
