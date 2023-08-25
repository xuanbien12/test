import { combineReducers } from 'redux'
import { createSlice } from "@reduxjs/toolkit";

const initState = {
    state: 0
}

const reducer = (state = initState, action: any) => {


    return state

}

export const rootReducer = combineReducers({
    reducer
})