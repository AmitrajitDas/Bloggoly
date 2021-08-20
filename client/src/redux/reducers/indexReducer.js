import { combineReducers } from 'redux'

import { fetchAllBlogsReducer } from './blogReducers'

const rootReducers = combineReducers({
  fetchAllBlogs: fetchAllBlogsReducer,
})

export default rootReducers
