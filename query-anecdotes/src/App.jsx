import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery } from '@tanstack/react-query'
import {getAnecdotes, increaseVotes}from './services/anecdoteServices'
import { useMutation,useQueryClient } from '@tanstack/react-query'
import { useNotificationDispatch } from './Context'

const App = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()
  const updateMutation =useMutation({
    mutationFn : increaseVotes,
    onSuccess: (updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'],anecdotes.map(n => n.id === updatedAnecdote.id ? updatedAnecdote : n))
      dispatch({type:'setNotification' ,payload:`anecdote ${updatedAnecdote.content} voted`})
      setTimeout(() => {
        dispatch({type:'removeNotification'})
        
      }, 2000);

    }
  })
  const result = useQuery({
    queryKey : ['anecdotes'],
    queryFn : getAnecdotes,
    
  })

  const handleVote = (anecdote) => {
    const updatedAnecdote = {...anecdote,votes : anecdote.votes +1}
    updateMutation.mutate(updatedAnecdote)
  }
  if (result.isLoading) {
    return <div>Loading anecdotes...</div>
  }
  if(result.isError){
    return <div>anecdote service not available due to problems in server</div>
  }

  const anecdotes = result.data


  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
