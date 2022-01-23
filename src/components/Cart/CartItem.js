import { AiOutlineClose } from 'react-icons/ai'
import Quantity from '../shared/Quantity'

function CartItem({ item }) {
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
        <p>
          <Quantity qty={item.qty} />
        </p>
      </div>
      <div className="CartItem-total">
        <p>{item.memory.price * item.qty}TL</p>
      </div>
      <button className="CartItem-delete">
        <AiOutlineClose />
      </button>
    </div>
  )
}

export default CartItem
