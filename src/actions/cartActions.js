import { ADD_TO_CART, CART_TOTAL } from '../constant/actionTypes'

export const addToCart = (item) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: item })
  dispatch({ type: CART_TOTAL })
}
