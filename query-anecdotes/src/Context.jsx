import { createContext,useReducer,useContext } from "react";

const notificationReducer = (state,action) => {
    switch(action.type){
        case "setNotification":
            return action.payload
        case "removeNotification":
            return ''
        default:
            return state
    }
}
const Context = createContext()

export const ContextProvider = (props) => {
    const [notification,notificationDispatch] = useReducer(notificationReducer,'')
    return(
        <Context.Provider value = {[notification,notificationDispatch]}>
            {props.children}
        </Context.Provider>
    )
}
export const useNotificationValue = () => {
    const notificationAndDispatch = useContext(Context)
    return notificationAndDispatch[0]
}
export const useNotificationDispatch = () => {
    const notificationAndDispatch = useContext(Context)
    return notificationAndDispatch[1]
}
export default Context 