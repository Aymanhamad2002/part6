import { createAnecdote } from "../reducers/anecdoteReducer"
import { useDispatch } from "react-redux"
import { setNotification,removeNotifcation } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        
        dispatch(createAnecdote(content))
        event.target.anecdote.value = ''
        dispatch(setNotification(`${content} is addeed`))
        setTimeout(() =>{
          dispatch(removeNotifcation())
        },3000)
        

        


    }

    return (<div>
      <form onSubmit ={addAnecdote}>
        <div><input name ='anecdote'/></div>
        <button type ='submit'>create</button>
      </form>
    </div>)
}
export default AnecdoteForm