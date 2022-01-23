import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

import Logo from '../icons/Logo'
import { useEffect, useState } from 'react'

function Header() {
  const itemsInCart = useSelector((state) => state.cart.items)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    console.log(itemsInCart.reduce((acc, cur) => acc + cur.qty, 0))
    setTotalCount(itemsInCart.reduce((acc, cur) => acc + cur.qty, 0))
  }, [itemsInCart])

  return (
    <header className="Header">
      <div className="container">
        <div className="Header-logo">
          <Link to="/">
            <Logo className="Header-logo-icon" />
          </Link>
        </div>
        <div className="Header-learnMore">
          <span>Redmi Note 10 5G hakkinda daha fazla bilgi edinin</span>
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
