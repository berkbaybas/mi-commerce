import { ADD_TO_CART, CART_TOTAL } from '../constant/actionTypes'

const INITIAL_STATE = {
  items: [],
  totalPrice: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let uniqueSlug = `${action.payload.id}-${action.payload.color.id}-${action.payload.memory.id}`
      const inCart = state.items.find((item) =>
        item.slug === uniqueSlug ? true : false
      )

      return {
        ...state,
        items: inCart
          ? state.items.map((item) =>
              item.slug === uniqueSlug ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.items, { ...action.payload, qty: 1, slug: uniqueSlug }]
      }
    case CART_TOTAL:
      const total = state.items.reduce((acc, cur) => {
        return acc + cur.memory.price * cur.qty
      }, 0)
      return { ...state, totalPrice: total }

    default:
      return state
  }
}

export default cartReducer
