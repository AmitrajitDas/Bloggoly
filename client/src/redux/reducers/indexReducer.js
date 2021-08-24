import { combineReducers } from 'redux'

import {
  fetchAllBlogsReducer,
  fetchSingleBlogReducer,
  createBlogReducer,
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
})

export default rootReducers
