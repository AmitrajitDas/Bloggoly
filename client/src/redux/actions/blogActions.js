import {
  FETCH_ALL_BLOGS_REQUEST,
  FETCH_ALL_BLOGS_SUCCESS,
  FETCH_ALL_BLOGS_FAILURE,
  FETCH_SINGLE_BLOG_REQUEST,
  FETCH_SINGLE_BLOG_SUCCESS,
  FETCH_SINGLE_BLOG_FAILURE,
} from '../constants/blogConstants'
import axios from 'axios'

export const fetchAllBlogsAction = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_BLOGS_REQUEST })

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_DEV_API}/api/blog/getblogs`
    )
    dispatch({ type: FETCH_ALL_BLOGS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: FETCH_ALL_BLOGS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const fetchSingleBlogAction = (id) => async (dispatch) => {
  dispatch({ type: FETCH_SINGLE_BLOG_REQUEST })

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_DEV_API}/api/blog/getblog/${id}`
    )
    dispatch({ type: FETCH_SINGLE_BLOG_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: FETCH_SINGLE_BLOG_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
