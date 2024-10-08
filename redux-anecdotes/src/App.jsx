import Filter from './components/Filter'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
const App = () => {
  const message = useSelector(state => state.notification)
  const dispatch = useDispatch()
  useEffect(() => {dispatch(initializeAnecdotes())},[])
  

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification message={message} />
      <Filter />
      <AnecdoteList />

      <h2>create new</h2>
      <AnecdoteForm />

    </div>
  )
}

export default App