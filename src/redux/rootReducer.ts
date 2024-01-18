
import { combineReducers } from 'redux'
import reduxGlobal from './slice/reduxGlobal'



export const rootReducer = combineReducers({
    global: reduxGlobal,

})