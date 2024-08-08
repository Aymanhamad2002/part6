import { createSlice } from "@reduxjs/toolkit"
import  anecdoteService from "../services/anecdoteService"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState:[],
  reducers:{
    createAnecdote(state,action){
    
      return [...state,action.payload]
    },
    voteChangeHanlder(state,action){
      const id = action.payload
      const anecdoteToChange = state.find(anecdote => anecdote.id === id)
      const anecdoteChanged = {...anecdoteToChange,votes : anecdoteToChange.votes + 1 }
      return state.map(anecdote => anecdote.id === id ? anecdoteChanged : anecdote)     

    },
    setAnecdotes(state,action){
      return action.payload
    }

  }

})
export const {voteChangeHanlder,createAnecdote,setAnecdotes} = anecdoteSlice.actions


export const initializeAnecdotes  = () => {
  return async dispatch =>{
    const anecdotes = await  anecdoteService.getAnecdotes()
    dispatch(setAnecdotes(anecdotes))
  }
}
export const addAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createAnecdote({content,votes:0})
    dispatch(createAnecdote(newAnecdote))

  }
}
export const increaseVote = (id,newObject) => {
  return async dispatch => {
    const updatedAnecdotes = await anecdoteService.updateAnecdoteVotes(newObject,id)
    dispatch(voteChangeHanlder(updatedAnecdotes.id))
  }

}
export default anecdoteSlice.reducer



