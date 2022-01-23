import { FiMinus, FiPlus } from 'react-icons/fi'

function Quantity({ qty }) {
  return (
    <div className="quantity-item">
      <button className="quantity-item-button">
        <FiMinus />
      </button>
      <input readOnly value={qty} />
      <button className="quantity-item-button">
        <FiPlus />
      </button>
    </div>
  )
}

export default Quantity
