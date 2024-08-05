import Anecdote from "./Anecdote";
import { voteChangeHanlder } from "../reducers/anecdoteReducer";
import { setNotification,removeNotifcation } from "../reducers/notificationReducer";
import { useSelector,useDispatch } from "react-redux";

const AnecdoteList = () => {
    const anecdotes = useSelector( state => {
        const anecdotess = [...state.anecdotes]
     return state.filter === '' 
     ? anecdotess.sort((a,b) => b.votes - a.votes)
     : state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase())).sort((a,b) => b.votes - a.votes)
    })
    const dispatch = useDispatch()

    const handleVote = (id) => {
        dispatch(voteChangeHanlder(id))
        const anecdoteToVote = anecdotes.find(anecdote => anecdote.id === id)
        dispatch(setNotification(` you voted${anecdoteToVote.content}`))
        setTimeout(() =>{
            dispatch(removeNotifcation())
        },3000)
    }
    return(<div>
        {anecdotes.map(anecdote => <Anecdote key ={anecdote.id} anecdote={anecdote} handleVote={handleVote} />)}
    </div>)

}
export default AnecdoteList