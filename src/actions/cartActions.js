import { ADD_TO_CART } from '../constant/actionTypes'

export const addToCart = (item) => {
  return { type: ADD_TO_CART, payload: item }
}
