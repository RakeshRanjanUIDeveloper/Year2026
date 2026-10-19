import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LoginCredentials } from "../../services/authService";

export interface User{
    email:string;
    token:string
}

export interface AuthState{
    user:User |null;
    loading:boolean,
    error: string | null
}

const initialState: AuthState ={
    user:null,
    loading:false,
    error:null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        loginStart: (state, _action: PayloadAction<LoginCredentials>) => {
    state.loading = true;
    state.error = null;
},
        loginSuccess: (state, action:PayloadAction<User>) =>{
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        loginFailure : (state, action:PayloadAction<string>) =>{
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) =>{
            state.user = null;
            state.loading = false;
            state.error = null;
        }
    }
})

export const {loginStart, loginSuccess, loginFailure, logout} = authSlice.actions;
export default authSlice.reducer;