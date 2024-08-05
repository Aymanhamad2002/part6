import deepFreeze from "deep-freeze"
import reducer from "./anecdoteReducer"

describe('anecdoteReducer', () => {
    test('return new anecdote with action NEW_ANECDOTE',() => {
        const state = []
        const action  = {
            type:'anecdotes/createAnecdote',
            payload:"hello world"
            
        }
        deepFreeze(state)
        const newState = reducer(state,action)
        expect(newState).toHaveLength(1)
        expect(newState).toContainEqual({
            content:'hello world',
            votes: 0,
            id : newState[0].id
        })
    })
    test( 'return an new state with VOTE_ANECDOTE', () => {
        const state = [
            {
                content : 'the app state is in redux store',
                votes: 0,
                id: 1
            }
            ,
            {
                content : 'state changes are made with actions',
                votes: 0,
                id: 2
            }
        ]
        const action = {
            type : 'anecdotes/voteChangeHanlder',
            payload:2
            
        }
        deepFreeze(state)
        const newState = reducer(state,action)

        expect(newState).toHaveLength(2)
        expect(newState).toContainEqual(
            {...state[1],votes :1}
        )
    })
})