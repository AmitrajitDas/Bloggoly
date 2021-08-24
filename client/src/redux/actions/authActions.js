import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
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
        `${process.env.REACT_APP_DEV_API}/api/auth/register`,
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
      `${process.env.REACT_APP_DEV_API}/api/auth/login`,
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
