import { combineReducers } from 'redux'
import { formDataReducer } from './dataStorage/reducers'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  formData: formDataReducer,
})
export default createRootReducer