import { FETCH_CATEGORIES } from '../constants/categoryConstants'
import axios from 'axios'

export const fetchCategoriesAction = () => async (dispatch) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_DEV_API}/api/category/getCategories`
  )
  dispatch({ type: FETCH_CATEGORIES, payload: data })
}
