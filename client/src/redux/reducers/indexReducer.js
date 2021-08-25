import { combineReducers } from 'redux'

import {
  fetchAllBlogsReducer,
  fetchSingleBlogReducer,
  createBlogReducer,
  deleteBlogReducer,
  updateBlogReducer,
} from './blogReducers'
import { fetchCategoriesReducer } from './categoryReducers'
import {
  userRegisterReducer,
  userLoginReducer,
  userDetailsReducer,
  userUpdateReducer,
} from './authReducers'

const rootReducers = combineReducers({
  fetchAllBlogs: fetchAllBlogsReducer,
  fetchSingleBlog: fetchSingleBlogReducer,
  fetchCategories: fetchCategoriesReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  createBlog: createBlogReducer,
  deleteBlog: deleteBlogReducer,
  updateBlog: updateBlogReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
})

export default rootReducers
