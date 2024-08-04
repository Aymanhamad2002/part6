import Anecdote from "./Anecdote";
import { voteChangeHanlder } from "../reducers/anecdoteReducer";
import { useSelector,useDispatch } from "react-redux";

const AnecdoteList = () => {
    const anecdotes = useSelector( state => state.sort((a,b) => b.votes - a.votes))
    const dispatch = useDispatch()

    const handleVote = (id) => {
        dispatch(voteChangeHanlder(id))
    }
    return(<div>
        {anecdotes.map(anecdote => <Anecdote key ={anecdote.id} anecdote={anecdote} handleVote={handleVote} />)}
    </div>)

}
export default AnecdoteList