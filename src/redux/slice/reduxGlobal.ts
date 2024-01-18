import { createSlice } from '@reduxjs/toolkit'


export interface ReduxGlobal {
    role: any,


}

const initialState: ReduxGlobal = {
    role: "",


}

export const ReduxGlobalSlice = createSlice({
    name: 'ReduxGlobal',
    initialState,
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload
        },


    },
})

// Action creators are generated for each case reducer function
export const { setRole } = ReduxGlobalSlice.actions

export default ReduxGlobalSlice.reducer