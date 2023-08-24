import { combineReducers } from 'redux'
// để tạm 
const initState = {
    state: 0
}
const reducer = (state = initState, action: any) => {

    if (action.type === "cc") {
        return state
    }
}

export const rootReducer = combineReducers(reducer)