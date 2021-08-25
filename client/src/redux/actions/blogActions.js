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
import axios from 'axios'

export const fetchAllBlogsAction = (query) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL_BLOGS_REQUEST })
    if (query) {
      const { data } = await axios.get(
        `${process.env.REACT_APP_DEV_API}/api/blog/getblogs` + query
      )
      dispatch({ type: FETCH_ALL_BLOGS_SUCCESS, payload: data })
    } else {
      const { data } = await axios.get(
        `${process.env.REACT_APP_DEV_API}/api/blog/getblogs`
      )
      dispatch({ type: FETCH_ALL_BLOGS_SUCCESS, payload: data })
    }
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
  try {
    dispatch({ type: FETCH_SINGLE_BLOG_REQUEST })
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

export const createBlogAction =
  (username, title, desc, file, category) => async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_BLOG_REQUEST })

      const {
        userLogin: { loginData },
      } = getState()

      const newBlog = {
        username,
        title,
        desc,
        file,
        category,
      }

      if (file) {
        const fileData = new FormData()
        const filename = Date.now() + file.name
        fileData.append('name', filename)
        fileData.append('file', file)
        newBlog.file = filename
        await axios.post(
          `${process.env.REACT_APP_DEV_API}/api/upload`,
          fileData
        )
      } else {
        return
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${loginData.token} `,
        },
      }

      const { data } = await axios.post(
        `${process.env.REACT_APP_DEV_API}/api/blog/create`,
        {
          username,
          title,
          desc,
          photo: newBlog.file,
          categories: category,
        },
        config
      )
      dispatch({ type: CREATE_BLOG_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: CREATE_BLOG_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const deleteBlogAction = (id) => async (dispatch, getState) => {
  const {
    userLogin: { loginData },
  } = getState()

  const config = {
    headers: {
      Authorization: `Bearer ${loginData.token} `,
    },
  }
  const { data } = await axios.delete(
    `${process.env.REACT_APP_DEV_API}/api/blog/delete/${id}`,
    config
  )

  dispatch({ type: DELETE_BLOG, payload: data })
}

export const updateBlogAction =
  (id, title, desc) => async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_BLOG_REQUEST })

      const {
        userLogin: { loginData },
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${loginData.token} `,
        },
      }

      const { data } = await axios.put(
        `${process.env.REACT_APP_DEV_API}/api/blog/update/${id}`,
        {
          title,
          desc,
        },
        config
      )
      dispatch({ type: UPDATE_BLOG_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: UPDATE_BLOG_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
