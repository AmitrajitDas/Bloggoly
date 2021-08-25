import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  FETCH_USER,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
} from '../constants/authConstants'
import axios from 'axios'

export const userRegisterAction =
  (username, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        `${process.env.REACT_APP_PROD_API}/api/auth/register`,
        { username, email, password },
        config
      )

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const userLoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `${process.env.REACT_APP_PROD_API}/api/auth/login`,
      { email, password },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('loginData', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const userLogoutAction = () => async (dispatch) => {
  localStorage.removeItem('loginData')
  dispatch({ type: USER_LOGOUT })
}

export const userDetailsAction = (id) => async (dispatch, getState) => {
  const {
    userLogin: { loginData },
  } = getState()

  const config = {
    headers: {
      Authorization: `Bearer ${loginData.token} `,
    },
  }

  const { data } = await axios.get(
    `${process.env.REACT_APP_PROD_API}/api/auth/profile/${id}`,
    config
  )

  dispatch({ type: FETCH_USER, payload: data })
}

export const userUpdateAction =
  (id, username, email, password) => async (dispatch, getState) => {
    try {
      dispatch({ type: USER_UPDATE_REQUEST })

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
        `${process.env.REACT_APP_PROD_API}/api/auth/update`,
        { id, username, email, password },
        config
      )

      dispatch({ type: USER_UPDATE_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: USER_UPDATE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
