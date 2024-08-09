import axios from "axios";
const baseUrl ='http://localhost:3001/anecdotes'

export const getAnecdotes  =  () => {
    return axios.get(baseUrl).then(res => res.data)
}
export const createAnecdote = async (content) => {
    const response = await axios.post(baseUrl,{content,votes:0})
    return response.data
}
export const increaseVotes = async (newObject) => {
    const fullUrl = `${baseUrl}/${newObject.id}`
    const response = await axios.put(fullUrl,newObject)
    return response.data
}
