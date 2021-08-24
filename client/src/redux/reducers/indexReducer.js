import { combineReducers } from 'redux'

import {
  fetchAllBlogsReducer,
  fetchSingleBlogReducer,
  createBlogReducer,
  deleteBlogReducer,
} from './blogReducers'
import { fetchCategoriesReducer } from './categoryReducers'
import { userRegisterReducer, userLoginReducer } from './authReducers'

const rootReducers = combineReducers({
  fetchAllBlogs: fetchAllBlogsReducer,
  fetchSingleBlog: fetchSingleBlogReducer,
  fetchCategories: fetchCategoriesReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  createBlog: createBlogReducer,
  deleteBlog: deleteBlogReducer,
})

export default rootReducers
