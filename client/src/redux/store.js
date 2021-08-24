import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/indexReducer'

const middleware = [thunk]

const loginDataFromStorage = localStorage.getItem('loginData')
  ? JSON.parse(localStorage.getItem('loginData'))
  : null

const initialState = {
  userLogin: { loginData: loginDataFromStorage },
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
