import axios from 'axios'

import { API_URL } from '../constant/ApiUrl'

import { ADD_CHOOSEN_PRODUCT, FETCH_PRODUCTS } from '../constant/actionTypes'

export const addChoosenProduct = (item) => (dispatch) => {
  dispatch({ type: ADD_CHOOSEN_PRODUCT, payload: item })
}

export const fetchProducts = () => (dispatch) => {
  axios
    .get(`${API_URL}/products`)
    .then((res) => {
      dispatch({ type: FETCH_PRODUCTS, payload: res.data })
    })
    .catch((err) => {
      console.log(err)
    })
}
