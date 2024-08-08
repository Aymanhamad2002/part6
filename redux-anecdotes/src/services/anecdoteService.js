import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'

const getAnecdotes = async () =>{
    const response = await axios.get(baseUrl)
    return response.data
}

const createAnecdote = async (newObject) => {
    const response = await axios.post(baseUrl,newObject)
    return response.data
}
const updateAnecdoteVotes = async (newObject,id) => {
    const fullUrl = `${baseUrl}/${id}`
    const response = await axios.put(fullUrl,newObject)
    return response.data
}
export default {getAnecdotes,createAnecdote,updateAnecdoteVotes}