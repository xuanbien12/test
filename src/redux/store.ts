
import { configureStore } from '@reduxjs/toolkit'
// import { composeWithDevTools } from '@redux-devtools/extension/lib/types/logOnly'
import { rootReducer } from './rootReducer'
// const tool = composeWithDevTools()
export const store = configureStore({
    reducer: rootReducer,

})