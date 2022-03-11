import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_TOTAL,
  HANDLE_QUANTITY
} from '../../constant/actionTypes'

const INITIAL_STATE = {
  items: [],
  totalPrice: 0
}

const createUniqueSlug = (product) => {
  return `${product.id}-${product.color.id}-${product.memory.id}`
}

const cartReducer = (state = INITIAL_STATE, action) => {
  let uniqueSlug
  switch (action.type) {
    case ADD_TO_CART:
      uniqueSlug = createUniqueSlug(action.payload)

      const inCart = state.items.find((item) =>
        item.slug === uniqueSlug ? true : false
      )

      return {
        ...state,
        items: inCart
          ? state.items.map((item) =>
              item.slug === uniqueSlug
                ? { ...item, qty: item.qty + action.payload.qty }
                : item
            )
          : [
              ...state.items,
              { ...action.payload, qty: action.payload.qty, slug: uniqueSlug }
            ]
      }
    case REMOVE_FROM_CART:
      uniqueSlug = createUniqueSlug(action.payload)
      return {
        ...state,
        items: state.items.filter((item) => item.slug !== uniqueSlug)
      }
    case CART_TOTAL:
      const total = state.items.reduce((acc, cur) => {
        return acc + cur.memory.price * cur.qty
      }, 0)
      return { ...state, totalPrice: total }
    case HANDLE_QUANTITY:
      uniqueSlug = createUniqueSlug(action.payload.item)
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.slug === uniqueSlug) {
            return { ...item, qty: action.payload.quantity }
          } else {
            return item
          }
        })
      }
    default:
      return state
  }
}

export default cartReducer
