import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import locale from './locale'
import messages from './messages'

export default combineReducers({
  router,
  locale,
  messages,
})
