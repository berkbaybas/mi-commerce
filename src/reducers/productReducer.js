import { ADD_CHOOSEN_PRODUCT } from '../constant/actionTypes'

const INITIAL_STATE = {
  choosenProduct: {}
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CHOOSEN_PRODUCT:
      console.log(action.payload)
      return { ...state, choosenProduct: action.payload }
    default:
      return state
  }
}

export default productReducer
