import { createAnecdote } from "../reducers/anecdoteReducer"
import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import { createNotification } from "../reducers/notificationReducer"


const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addNew = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        dispatch(addAnecdote(content))
        event.target.anecdote.value = ''
        dispatch(createNotification(`${content} is addeed`,3000))
     
        

        


    }

    return (<div>
      <form onSubmit ={addNew}>
        <div><input name ='anecdote'/></div>
        <button type ='submit'>create</button>
      </form>
    </div>)
}
export default AnecdoteForm