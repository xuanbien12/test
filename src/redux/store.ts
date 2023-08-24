import { createStore, combineReducers } from 'redux'
// import { composeWithDevTools } from '@redux-devtools/extension/lib/types/logOnly'
import { rootReducer } from './rootReducer'
// const tool = composeWithDevTools()
export const store = createStore(rootReducer)