import { ADD_CHOOSEN_PRODUCT } from '../constant/actionTypes'

export const addChoosenProduct = (item) => (dispatch) => {
  dispatch({ type: ADD_CHOOSEN_PRODUCT, payload: item })
}
