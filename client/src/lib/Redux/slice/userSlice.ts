import { createSlice } from "@reduxjs/toolkit"

interface userInterface {
    user:object
}

const initialState: userInterface = {
    user: {}
}


const userSlice = createSlice({

    name: "userSlice",
    initialState,
    reducers: {
        addUser: (state,action) =>{
            state.user = action.payload
        },
        removeUser: (state) =>{
            state.user = {}
        },
        
    }
})


export const userActions = userSlice.actions
export const  UserSliceReducer = userSlice.reducer