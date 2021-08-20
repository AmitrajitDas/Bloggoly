import {
  FETCH_ALL_BLOGS_REQUEST,
  FETCH_ALL_BLOGS_SUCCESS,
  FETCH_ALL_BLOGS_FAILURE,
} from '../constants/blogConstants'

export const fetchAllBlogsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_BLOGS_REQUEST:
      return { loading: true }
    case FETCH_ALL_BLOGS_SUCCESS:
      return { ...state, loading: false, blogs: action.payload }
    case FETCH_ALL_BLOGS_FAILURE:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
