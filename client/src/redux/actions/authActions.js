import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
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
