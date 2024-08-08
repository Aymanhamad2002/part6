import Anecdote from "./Anecdote";
import { increaseVote, voteChangeHanlder } from "../reducers/anecdoteReducer";
import { useSelector,useDispatch } from "react-redux";
import { createNotification } from "../reducers/notificationReducer";
const AnecdoteList = () => {
    const anecdotes = useSelector( state => {
        const anecdotess = [...state.anecdotes]
     return state.filter === '' 
     ? anecdotess.sort((a,b) => b.votes - a.votes)
     : state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase())).sort((a,b) => b.votes - a.votes)
    })
    const dispatch = useDispatch()

    const handleVote = (id) => {
        const anecdoteToVote = anecdotes.find(anecdote => anecdote.id === id)
        dispatch(increaseVote(id ,{...anecdoteToVote,votes: anecdoteToVote.votes  + 1}))
        dispatch(createNotification(`you voted ${anecdoteToVote.content}`,5))
    }
    return(<div>
        {anecdotes.map(anecdote => <Anecdote key ={anecdote.id} anecdote={anecdote} handleVote={handleVote} />)}
    </div>)

}
export default AnecdoteList