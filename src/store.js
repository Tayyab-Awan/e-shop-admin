import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { sidebarShowReducer } from './reducers/layoutReducer';
import { userLoginReducer } from './reducers/userReducers';

const userFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  sidebarShow: 'responsive',
  userLogin: { userInfo: userFromStorage },
}

const reducer = combineReducers({
  sidebarShow: sidebarShowReducer,
  userLogin: userLoginReducer,

})

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(
  applyMiddleware(...middleware)
))
export default store