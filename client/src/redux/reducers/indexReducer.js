import { combineReducers } from 'redux'

import { fetchAllBlogsReducer, fetchSingleBlogReducer } from './blogReducers'

const rootReducers = combineReducers({
  fetchAllBlogs: fetchAllBlogsReducer,
  fetchSingleBlog: fetchSingleBlogReducer,
})

export default rootReducers
