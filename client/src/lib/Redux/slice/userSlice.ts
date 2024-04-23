import { createSlice } from "@reduxjs/toolkit"

interface userInterface {
    user:object,
    isLoggedIn:boolean
}

const initialState: userInterface = {
    user: {},
    isLoggedIn:false
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
        LogIn:(state)=>{
            state.isLoggedIn = true
        },
        Logout:(state)=>{
            state.isLoggedIn = false
        },
       

        
    }
})


export const userActions = userSlice.actions
export const  UserSliceReducer = userSlice.reducer