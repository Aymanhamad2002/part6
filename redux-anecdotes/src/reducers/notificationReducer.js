import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name:'notification',
    initialState:'',
    reducers:{
        setNotification(state,action){
            return action.payload
        },
        removeNotification(state,action){
            return ''
        }
    }
})
export const {setNotification,removeNotification} = notificationSlice.actions
export const createNotification = (notification,duration) => {
    return async dispatch => {
        dispatch(setNotification(notification))
        setTimeout(()=> {
            dispatch(removeNotification())
        },duration)
    }

}

export default notificationSlice.reducer