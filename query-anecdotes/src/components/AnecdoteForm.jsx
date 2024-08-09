import { createAnecdote } from "../services/anecdoteServices"
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query"
import { useNotificationDispatch } from "../Context"
const AnecdoteForm = () => {
  const dispatch = useNotificationDispatch()
  const queryClient = useQueryClient()
  const newMutation = useMutation({
    mutationFn:createAnecdote,
    onSuccess : (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'],anecdotes.concat(newAnecdote))
      dispatch({type:'setNotification' ,payload:`anecdote ${newAnecdote.content} created`})
      setTimeout(() => {
        dispatch({type:'removeNotification'})
        
      }, 2000);
    },
    onError : (error) => {
      
      dispatch({type:'setNotification' ,payload:error.response.data.error})
      setTimeout(() => {
        dispatch({type:'removeNotification'})
        
      }, 2000);

    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    newMutation.mutate(content)
    event.target.anecdote.value = ''
  
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
