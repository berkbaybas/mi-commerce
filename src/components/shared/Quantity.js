import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FiMinus, FiPlus } from 'react-icons/fi'
import { handleQuantity } from '../../actions/cartActions'

function Quantity({ item }) {
  const itemsInCart = useSelector((state) => state.cart.items)
  const [quantity, setQuantity] = useState(item.qty)

  useEffect(() => {
    const currentItem = itemsInCart.find((el) => el.slug === item.slug)
    setQuantity(currentItem.qty)
    console.log(currentItem.qty)
  }, [itemsInCart])

  useEffect(() => {
    console.log(quantity)
  }, [quantity])

  const dispatch = useDispatch()

  const decreaseItem = () => {
    dispatch(handleQuantity(item, item.qty - 1))
  }

  const increaseItem = () => {
    dispatch(handleQuantity(item, item.qty + 1))
  }

  return (
    <div className="quantity-item">
      <button className="quantity-item-button" onClick={decreaseItem}>
        <FiMinus />
      </button>
      <div className="quantity-item-value">
        <span>{quantity}</span>
      </div>
      <button className="quantity-item-button" onClick={increaseItem}>
        <FiPlus />
      </button>
    </div>
  )
}

export default Quantity
