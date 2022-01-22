import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import ProductOptionTitle from '../../components/shared/ProductOptionTitle'
import { FiCheckCircle, FiMinus, FiPlus } from 'react-icons/fi'

import { API_URL } from '../../constant/ApiUrl'

function ProductDetail() {
  let params = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios(`${API_URL}/products/${params.id}`)
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="ProductDetail-wrapper">
      <div className="container">
        {product && (
          <div className="ProductDetail">
            <div className="ProductDetail-image">
              <img src={product.colors[0].image} alt={product.name} />
            </div>
            <div className="ProductDetail-option">
              <div className="ProductDetail-option-info">
                <h3 className="info-name">{product.name}</h3>
                <p className="info-desc">{product.slug}</p>
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
                {product.memory.map((el) => {
                  return (
                    <button className="memory-item">
                      <span className="memory-item-value">
                        {product.ram}GB+{el.gb}GB
                      </span>
                    </button>
                  )
                })}
              </div>
              <div className="ProductDetail-option-color">
                <ProductOptionTitle>Renk</ProductOptionTitle>
                {product.colors.map((color) => {
                  return (
                    <button className="color-item">
                      <div
                        className="color-item-hex"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <span>{color.name}</span>
                    </button>
                  )
                })}
              </div>
              <div className="ProductDetail-option-quantity">
                <ProductOptionTitle>Adet</ProductOptionTitle>
                <div className="quantity-item">
                  <button className="quantity-item-button">
                    <FiMinus />
                  </button>
                  <input readOnly value={1} />
                  <button className="quantity-item-button">
                    <FiPlus />
                  </button>
                </div>
              </div>
              <div className="ProductDetail-option-subtotal">
                <div className="subtotal-calculate">
                  <p>Mi 11 Lite 5G NE Beyaz 8GB+256GB * 1</p>
                  <p>8.599,00TL</p>
                </div>
                <div className="subtotal-sum">
                  <p className="subtotal-sum-title">Toplam:</p>
                  <p className="subtotal-sum-value">8.599,00TL</p>
                </div>
              </div>
              <div className="ProductDetail-option-submit">
                <button>Şimdi Satın Al</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
