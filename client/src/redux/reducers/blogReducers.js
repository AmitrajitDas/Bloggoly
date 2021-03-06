import {
  FETCH_ALL_BLOGS_REQUEST,
  FETCH_ALL_BLOGS_SUCCESS,
  FETCH_ALL_BLOGS_FAILURE,
  FETCH_SINGLE_BLOG_REQUEST,
  FETCH_SINGLE_BLOG_SUCCESS,
  FETCH_SINGLE_BLOG_FAILURE,
  CREATE_BLOG_REQUEST,
  CREATE_BLOG_SUCCESS,
  CREATE_BLOG_FAILURE,
  DELETE_BLOG,
  UPDATE_BLOG_REQUEST,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_FAILURE,
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

export const fetchSingleBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SINGLE_BLOG_REQUEST:
      return { loading: true, ...state }
    case FETCH_SINGLE_BLOG_SUCCESS:
      return { loading: false, blog: action.payload }
    case FETCH_SINGLE_BLOG_FAILURE:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const createBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BLOG_REQUEST:
      return { loading: true }
    case CREATE_BLOG_SUCCESS:
      return { loading: false, blogDetails: action.payload }
    case CREATE_BLOG_FAILURE:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const deleteBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BLOG:
      return { message: action.payload }
    default:
      return state
  }
}

export const updateBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BLOG_REQUEST:
      return { loading: true }
    case UPDATE_BLOG_SUCCESS:
      return { loading: false, updatedBlog: action.payload }
    case UPDATE_BLOG_FAILURE:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
