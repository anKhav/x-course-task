import {createSlice} from "@reduxjs/toolkit";
import userData from '../../data/user.json'

const initial = {
    user:{},
    isLogged:false
}


const userSlice = createSlice({
    name:'user',
    initialState:initial,
    reducers:{
        getUser: state => {
            state.user = userData
            state.isLogged = true
        },
        logOut: state => {
            state.user = {}
            state.isLogged = false
        },
        logIn: state => {
            state.user = userData
            state.isLogged = true
        },
    }
})

export const {getUser,logOut,logIn} = userSlice.actions
export default userSlice.reducer