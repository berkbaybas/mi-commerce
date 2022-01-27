import { ADD_CHOOSEN_PRODUCT, FETCH_PRODUCTS } from '../constant/actionTypes'

const INITIAL_STATE = {
  choosenProduct: {},
  items: []
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CHOOSEN_PRODUCT:
      console.log(action.payload)
      return { ...state, choosenProduct: action.payload }
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload }
    default:
      return state
  }
}

export default productReducer
