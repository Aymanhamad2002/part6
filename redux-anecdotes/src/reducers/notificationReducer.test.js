import deepFreeze from "deep-freeze";
import notificationReducer from './notificationReducer'
import { freeze } from "@reduxjs/toolkit";


describe('NotificationReducer',() => {
    test('a new state is returned',()=>{
        const initialState =''
        const action ={
            type:'notification/setNotification',
            payload: 'the content added'
        }
        deepFreeze(initialState)
        const newState =notificationReducer(initialState,action)
        expect(newState).toEqual('the content added')
         
    })
})