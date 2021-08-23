import { combineReducers } from 'redux'

import { fetchAllBlogsReducer, fetchSingleBlogReducer } from './blogReducers'
import { fetchCategoriesReducer } from './categoryReducers'

const rootReducers = combineReducers({
  fetchAllBlogs: fetchAllBlogsReducer,
  fetchSingleBlog: fetchSingleBlogReducer,
  fetchCategories: fetchCategoriesReducer,
})

export default rootReducers
