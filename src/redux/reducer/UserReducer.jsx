import {createReducer} from "@reduxjs/toolkit"
const initialstate={}
export const userReducer=createReducer(initialstate,{
    registerRequest:(state)=>{
        state.loading=true
    },
    registerSuccess:(state,action)=>{
        state.Users=action.payload
        state.loading=false
    },
    registerFail:(state,action)=>{
        state.error=action.payload
    },
    LoginRequest:(state)=>{
        state.loading=true
    },
    LoginSuccess:(state,action)=>{
        state.Users=action.payload
        state.loading=false
    },
    LoginFail:(state,action)=>{
        state.error=action.payload
    }
})