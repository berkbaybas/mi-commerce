import { ADD_TO_CART } from '../constant/actionTypes'

const INITIAL_STATE = {
  items: [],
  totalPrice: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const inCart = state.items.find((item) =>
        item.id == action.payload.id ? true : false
      )
      console.log(action.payload.id)
      return {
        ...state,
        items: inCart
          ? state.items.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.items, { ...action.payload, qty: 1 }]
      }

    default:
      return state
  }
}

export default cartReducer
