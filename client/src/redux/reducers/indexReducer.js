import { combineReducers } from 'redux'

import { fetchAllBlogsReducer, fetchSingleBlogReducer } from './blogReducers'
import { fetchCategoriesReducer } from './categoryReducers'
import { userRegisterReducer } from './authReducers'

const rootReducers = combineReducers({
  fetchAllBlogs: fetchAllBlogsReducer,
  fetchSingleBlog: fetchSingleBlogReducer,
  fetchCategories: fetchCategoriesReducer,
  userRegister: userRegisterReducer,
})

export default rootReducers
