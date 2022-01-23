import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { addToCart } from '../../actions/cartActions'
import { addChoosenProduct } from '../../actions/productActions'

import ProductOptionTitle from '../../components/shared/ProductOptionTitle'
import Quantity from '../../components/shared/Quantity'
import { FiMinus, FiPlus, FiCheckCircle } from 'react-icons/fi'
import {} from 'react-icons/fi'

import { API_URL } from '../../constant/ApiUrl'

function ProductDetail() {
  let params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  const [product, setProduct] = useState(null)
  const [memory, setMemory] = useState({})
  const [color, setColor] = useState({})
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    axios(`${API_URL}/products/${params.id}`)
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    if (product) {
      setColor(product.colors[0])
      setMemory(product.memory[0])
      dispatch(addChoosenProduct(product))
    }
  }, [product])

  const decreaseItem = () => {
    setQuantity(quantity - 1)
  }

  const increaseItem = () => {
    setQuantity(quantity + 1)
  }

  const addCart = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        slug: product.slug,
        ram: product.ram,
        sim: product.sim,
        color: color,
        memory: memory,
        qty: quantity
      })
    )
    setTimeout(() => {
      navigate('/cart')
    }, 750)
  }

  const handleColor = (color) => {
    setColor(color)
  }

  const handleMemory = (memory) => {
    setMemory(memory)
  }

  return (
    <div className="ProductDetail-wrapper">
      <div className="container">
        {product && (
          <div className="ProductDetail">
            <div className="ProductDetail-image">
              <img src={color.image} alt={product.name} />
            </div>
            <div className="ProductDetail-option">
              <div className="ProductDetail-option-info">
                <h3 className="info-name">{product.name}</h3>
                <p className="info-desc">
                  {memory.ram}GB+{memory.gb}GB, {color.name}
                </p>
                <p className="info-price">{product.price}TL</p>
              </div>
              <div className="ProductDetail-option-offer">
                <ul>
                  <li>
                    3 iş günü içinde kargo. Bayram veya kampanya dönemlerinde
                    yoğunluk sebebiyle kargolarınızda gecikme yaşanabilir.
                  </li>
                </ul>
              </div>
              <div className="ProductDetail-option-support">
                <div className="support-item">
                  <FiCheckCircle />
                  <a className="support-item-link">2 Yıl Garanti</a>
                </div>
                <div className="support-item">
                  <FiCheckCircle />
                  <a className="support-item-link">14 Gün İçinde İade</a>
                </div>
                <div className="support-item">
                  <FiCheckCircle />
                  <a className="support-item-link">Ücretsiz Kargo</a>
                </div>
              </div>
              <div className="ProductDetail-option-memory">
                <ProductOptionTitle>Kapasite</ProductOptionTitle>
                <div className="ProductDetail-option-memory-wrapper">
                  {product.memory.map((el) => {
                    return (
                      <button
                        key={el.id}
                        className={`memory-item ${
                          memory.id === el.id ? 'active' : ''
                        }`}
                        onClick={() => handleMemory(el)}
                      >
                        <span className="memory-item-value">
                          {el.ram}GB+{el.gb}GB
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
              <div className="ProductDetail-option-color">
                <ProductOptionTitle>Renk</ProductOptionTitle>
                <div className="ProductDetail-option-color-wrapper">
                  {product.colors.map((el) => {
                    return (
                      <button
                        key={el.id}
                        className={`color-item ${
                          el.id === color.id ? 'active' : ''
                        }`}
                        onClick={() => handleColor(el)}
                      >
                        <div
                          className="color-item-hex"
                          style={{ backgroundColor: el.hex }}
                        ></div>
                        <span>{el.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
              <div className="ProductDetail-option-quantity">
                <ProductOptionTitle>Adet</ProductOptionTitle>
                <div className="quantity-item">
                  <button
                    className="quantity-item-button"
                    onClick={decreaseItem}
                  >
                    <FiMinus />
                  </button>
                  <div className="quantity-item-value">
                    <span>{quantity}</span>
                  </div>
                  <button
                    className="quantity-item-button"
                    onClick={increaseItem}
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
              <div className="ProductDetail-option-subtotal">
                <div className="subtotal-calculate">
                  <p>
                    {product.name} {color.name} {memory.ram}GB+{memory.gb}GB *{' '}
                    {quantity}
                  </p>
                  <p>{memory.price * quantity}TL</p>
                </div>
                <div className="subtotal-sum">
                  <p className="subtotal-sum-title">Toplam:</p>
                  <p className="subtotal-sum-value">
                    {memory.price * quantity}TL
                  </p>
                </div>
              </div>
              <div className="ProductDetail-option-submit">
                <button onClick={() => addCart(product)}>Şimdi Satın Al</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
