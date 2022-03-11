import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/actions/cartActions'

import { AiOutlineClose } from 'react-icons/ai'
import Quantity from '../shared/Quantity'

function CartItem({ item }) {
  const dispatch = useDispatch()
  const removeItem = (item) => {
    dispatch(removeFromCart(item))
  }
  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img src={item.color.image} alt="" />
      </div>
      <div className="CartItem-name">
        <p>
          {item.name} {item.color.name} {item.memory.ram}GB+{item.memory.gb}GB
        </p>
      </div>
      <div className="CartItem-price">
        <p>{item.memory.price}TL</p>
      </div>
      <div className="CartItem-quantity">
        <Quantity item={item} />
      </div>
      <div className="CartItem-total">
        <p>{item.memory.price * item.qty}TL</p>
      </div>
      <button className="CartItem-delete" onClick={() => removeItem(item)}>
        <AiOutlineClose />
      </button>
    </div>
  )
}

export default CartItem
