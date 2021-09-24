import { combineReducers } from 'redux'
import { formDataReducer } from './dataStorage/reducers'

const createRootReducer = () => combineReducers({
  formData: formDataReducer,
})
export default createRootReducer