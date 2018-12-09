import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'

export default (initialState, history) => {
  const enhancer = compose(applyMiddleware(routerMiddleware(history)))

  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
  }

  return { store }
}
