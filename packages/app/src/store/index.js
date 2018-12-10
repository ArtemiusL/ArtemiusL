import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'

export default (initialState, history) => {
  const composeEnhancers =
    (__DEV__ &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

  const enhancer = composeEnhancers(applyMiddleware(routerMiddleware(history)))

  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
  }

  return { store }
}
