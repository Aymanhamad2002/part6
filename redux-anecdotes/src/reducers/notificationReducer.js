import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name:'notification',
    initialState:'',
    reducers:{
        setNotification(state,action){
            return action.payload
        },
        removeNotifcation(state,action){
            return ''
        }
    }
})
export const {setNotification,removeNotifcation} = notificationSlice.actions
export default notificationSlice.reducer