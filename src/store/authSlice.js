//Creating redux slice to update initial state of web app.
import { createSlice } from "@reduxjs/toolkit";

const userData=localStorage.getItem("token") || ""

const initialState={
    status:userData? true: false,
    userData:userData? userData: null,
    driverLatitude:null,
    driverLongitude:null,

}
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true
            state.userData=action.payload.userData
        },
        logout:(state)=>{
            state.status=false
            state.userData=null
        },
        locate:(state,action)=>{
            state.driverLatitude=action.payload.driverLatitude
            state.driverLongitude=action.payload.driverLongitude
        }
        
    }
})

export const {login,logout,locate}=authSlice.actions
export default authSlice.reducer