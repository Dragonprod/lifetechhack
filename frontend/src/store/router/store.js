import { createStore } from 'redux'
import createRootReducer from '../reducers'

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(),
    preloadedState,
  )

  return store
}