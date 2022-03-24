import { combineReducers } from "redux";
import counterReducer from './Reducer'


const rootReducer=combineReducers({counterReducer})
export default rootReducer