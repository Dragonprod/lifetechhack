import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { formDataReducer } from './dataStorage/reducers'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  dataStorage: formDataReducer,
})
export default createRootReducer