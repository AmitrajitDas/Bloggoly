import { FETCH_CATEGORIES } from '../constants/categoryConstants'

export const fetchCategoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload }

    default:
      return state
  }
}
