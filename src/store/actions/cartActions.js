import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_TOTAL,
  HANDLE_QUANTITY
} from '../../constant/actionTypes'

export const addToCart = (item) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: item })
  dispatch({ type: CART_TOTAL })
}

export const removeFromCart = (item) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: item })
  dispatch({ type: CART_TOTAL })
}

export const handleQuantity = (item, quantity) => (dispatch) => {
  dispatch({ type: HANDLE_QUANTITY, payload: { item, quantity } })
  dispatch({ type: CART_TOTAL })
}
